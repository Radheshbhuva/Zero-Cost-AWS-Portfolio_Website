import { memo, useEffect, useMemo, useState } from 'react';
import { FiAlertCircle, FiCloud, FiEye } from 'react-icons/fi';

const VISITOR_COUNTER_ENDPOINT = 'https://02f4w5idwb.execute-api.us-east-1.amazonaws.com/prod/counter';
const REQUEST_TIMEOUT_MS = 8000;

type CounterStatus = 'loading' | 'success' | 'error';

interface VisitorCounterProps {
  className?: string;
  compact?: boolean;
}

interface CounterState {
  count: number | null;
  status: CounterStatus;
  error: string | null;
}

function parsePossibleJson(value: unknown): unknown {
  if (typeof value !== 'string') {
    return value;
  }

  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function extractVisitorCount(payload: unknown): number | null {
  const parsedPayload = parsePossibleJson(payload);

  if (typeof parsedPayload === 'number' && Number.isFinite(parsedPayload)) {
    return parsedPayload;
  }

  if (!parsedPayload || typeof parsedPayload !== 'object') {
    return null;
  }

  const record = parsedPayload as Record<string, unknown>;

  if ('body' in record) {
    const bodyCount = extractVisitorCount(record.body);

    if (bodyCount !== null) {
      return bodyCount;
    }
  }

  const candidateKeys = ['count', 'visitors', 'visitorCount', 'visitor_count', 'views', 'value'];

  for (const key of candidateKeys) {
    const value = record[key];

    if (typeof value === 'number' && Number.isFinite(value)) {
      return value;
    }

    if (typeof value === 'string') {
      const numericValue = Number(value.replace(/,/g, ''));

      if (Number.isFinite(numericValue)) {
        return numericValue;
      }
    }
  }

  return null;
}

function formatCount(count: number | null) {
  if (count === null) {
    return '----';
  }

  return new Intl.NumberFormat('en-IN').format(count);
}

function VisitorCounterComponent({ className = '', compact = false }: VisitorCounterProps) {
  const [counter, setCounter] = useState<CounterState>({
    count: null,
    status: 'loading',
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    let isMounted = true;

    async function fetchVisitorCount() {
      try {
        const response = await fetch(VISITOR_COUNTER_ENDPOINT, {
          method: 'GET',
          signal: controller.signal,
          headers: {
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Counter API returned ${response.status}`);
        }

        const contentType = response.headers.get('content-type') || '';
        const payload = contentType.includes('application/json') ? await response.json() : await response.text();
        const count = extractVisitorCount(payload);

        if (count === null) {
          throw new Error('Counter API response did not include a valid count');
        }

        if (isMounted) {
          setCounter({ count, status: 'success', error: null });
        }
      } catch (error) {
        if (!isMounted) {
          return;
        }

        const isAbortError = error instanceof DOMException && error.name === 'AbortError';

        setCounter({
          count: null,
          status: 'error',
          error: isAbortError ? 'Visitor counter timed out' : 'Visitor counter unavailable',
        });
      } finally {
        window.clearTimeout(timeoutId);
      }
    }

    void fetchVisitorCount();

    return () => {
      isMounted = false;
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  const countLabel = useMemo(() => formatCount(counter.count), [counter.count]);
  const isLoading = counter.status === 'loading';
  const isError = counter.status === 'error';

  return (
    <aside
      className={`visitor-counter ${compact ? 'visitor-counter-compact' : ''} ${className}`}
      aria-label="Portfolio visitor counter"
      aria-busy={isLoading}
    >
      <span className="visitor-counter-icon" aria-hidden="true">
        {isError ? <FiAlertCircle /> : <FiEye />}
      </span>
      <span className="visitor-counter-copy">
        <span className="visitor-counter-label">
          <FiCloud aria-hidden="true" />
          AWS Live Counter
        </span>
        <span className="visitor-counter-value" aria-live="polite">
          <span aria-hidden="true">Visitors: </span>
          <span className="sr-only">Visitors: </span>
          {isLoading ? 'Loading...' : isError ? 'Unavailable' : countLabel}
        </span>
      </span>
      {isError ? <span className="sr-only">{counter.error}</span> : null}
    </aside>
  );
}

export const VisitorCounter = memo(VisitorCounterComponent);
