import type { GitHubProfile, GitHubRepo } from '../types/portfolio';

const GITHUB_USER = 'Radheshbhuva';
const GITHUB_API_BASE = 'https://api.github.com';
const REQUEST_TIMEOUT_MS = 9000;

async function fetchWithTimeout<T>(url: string): Promise<T> {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: 'application/vnd.github+json',
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`);
    }

    return (await response.json()) as T;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

export async function getGitHubProfile() {
  return fetchWithTimeout<GitHubProfile>(`${GITHUB_API_BASE}/users/${GITHUB_USER}`);
}

export async function getFeaturedRepositories() {
  const repos = await fetchWithTimeout<GitHubRepo[]>(
    `${GITHUB_API_BASE}/users/${GITHUB_USER}/repos?sort=updated&per_page=8`,
  );

  return repos
    .filter((repo) => !repo.name.toLowerCase().includes('readme'))
    .sort((a, b) => {
      const scoreA = a.stargazers_count + a.forks_count;
      const scoreB = b.stargazers_count + b.forks_count;

      if (scoreA === scoreB) {
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      }

      return scoreB - scoreA;
    })
    .slice(0, 6);
}
