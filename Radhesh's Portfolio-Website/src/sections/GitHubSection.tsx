import { useEffect, useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { AnimatedCard } from '../components/AnimatedCard';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { contact } from '../data/portfolio';
import { getFeaturedRepositories } from '../services/github';
import type { GitHubRepo } from '../types/portfolio';

type GitHubState = {
  repos: GitHubRepo[];
  status: 'loading' | 'success' | 'error';
};

export function GitHubSection() {
  const [state, setState] = useState<GitHubState>({
    repos: [],
    status: 'loading',
  });

  useEffect(() => {
    let isMounted = true;

    async function loadGitHub() {
      try {
        const repos = await getFeaturedRepositories();

        if (isMounted) {
          setState({ repos, status: 'success' });
        }
      } catch {
        if (isMounted) {
          setState({ repos: [], status: 'error' });
        }
      }
    }

    void loadGitHub();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="github" className="section-padding bg-white dark:bg-slate-950" aria-labelledby="github-title">
      <Container>
        <SectionHeading
          id="github-title"
          eyebrow="GitHub"
          title="Featured repositories"
          description="The portfolio fetches current repository data from the GitHub API with loading and error states."
        />

        {state.status === 'loading' ? (
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-8 text-center font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            Loading GitHub repositories...
          </div>
        ) : null}

        {state.status === 'error' ? (
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-8 text-center dark:border-amber-500/30 dark:bg-amber-500/10">
            <p className="font-bold text-amber-800 dark:text-amber-200">GitHub repositories are temporarily unavailable.</p>
            <a className="mt-3 inline-flex items-center gap-2 font-bold text-teal-700 dark:text-accent" href={contact.githubUrl} target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" />
              Open GitHub Profile
            </a>
          </div>
        ) : null}

        {state.status === 'success' ? (
          <div className="grid gap-6 lg:grid-cols-3">
            {state.repos.map((repo, index) => (
              <AnimatedCard key={repo.id} delay={index * 0.06} className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{repo.language || 'Repository'}</p>
                <h3 className="mt-3 font-display text-lg font-bold text-primary dark:text-white">{repo.name}</h3>
                <p className="mt-3 min-h-20 leading-7 text-slate-600 dark:text-slate-300">
                  {repo.description || 'Repository available on GitHub for review.'}
                </p>
                <a href={repo.html_url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-teal-700 hover:text-primary dark:text-accent dark:hover:text-white">
                  View Repository
                  <FiExternalLink aria-hidden="true" />
                </a>
              </AnimatedCard>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}