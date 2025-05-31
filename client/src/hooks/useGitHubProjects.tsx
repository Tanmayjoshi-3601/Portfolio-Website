import { useState, useEffect } from 'react';
import { fetchGitHubProjects } from '@/lib/github';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

export function useGitHubProjects() {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setIsLoading(true);
        const repos = await fetchGitHubProjects();
        setProjects(repos);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch GitHub projects:', err);
        setError('Failed to load projects');
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  return { projects, isLoading, error };
}
