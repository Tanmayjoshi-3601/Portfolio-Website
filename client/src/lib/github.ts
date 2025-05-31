import { GITHUB_CONFIG } from './constants';

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

export async function fetchGitHubProjects(): Promise<GitHubRepo[]> {
  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };

    // Add auth header if token is available
    if (GITHUB_CONFIG.token) {
      headers['Authorization'] = `token ${GITHUB_CONFIG.token}`;
    }

    const response = await fetch(
      `${GITHUB_CONFIG.apiUrl}/users/${GITHUB_CONFIG.username}/repos?sort=updated&per_page=20`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();
    
    // Filter for relevant AI/ML projects and sort by stars and recent activity
    const filteredRepos = repos
      .filter(repo => {
        const isRelevant = 
          repo.description?.toLowerCase().includes('ai') ||
          repo.description?.toLowerCase().includes('ml') ||
          repo.description?.toLowerCase().includes('machine learning') ||
          repo.description?.toLowerCase().includes('neural') ||
          repo.description?.toLowerCase().includes('deep learning') ||
          repo.language === 'Python' ||
          repo.language === 'Java' ||
          repo.topics.some(topic => 
            ['ai', 'ml', 'machine-learning', 'deep-learning', 'pytorch', 'tensorflow', 'llm'].includes(topic.toLowerCase())
          );
        
        return isRelevant && !repo.name.toLowerCase().includes('config') && !repo.name.toLowerCase().includes('dotfiles');
      })
      .sort((a, b) => {
        // Sort by stars first, then by last updated
        if (a.stargazers_count !== b.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      });

    return filteredRepos;
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    throw error;
  }
}

export function getProjectDescription(repo: GitHubRepo): string {
  if (repo.description) {
    return repo.description;
  }

  // Generate description based on name and topics
  const name = repo.name.toLowerCase();
  const topics = repo.topics.join(', ');

  if (name.includes('ai') || name.includes('ml')) {
    return `AI/ML project${topics ? ` focusing on ${topics}` : ''}. Built with ${repo.language || 'modern technologies'}.`;
  }

  if (name.includes('web') || name.includes('app')) {
    return `Web application${topics ? ` featuring ${topics}` : ''}. Developed using ${repo.language || 'modern frameworks'}.`;
  }

  return `${repo.language || 'Software'} project${topics ? ` involving ${topics}` : ''}. Check the repository for more details.`;
}
