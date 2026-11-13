export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'web3' | 'frontend' | 'app';
  categoryLabel: string;
  badge: string;
  summary: string;
  url: string;
  metrics: ProjectMetric[];
  tech: string[];
  features: string[];
  codeSnippet: string;
  mockupImg: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  serviceType: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: string[];
  highlightSkills: string[];
}

