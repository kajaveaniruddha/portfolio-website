// types.ts
export interface WorkCard {
  id: number;
  image?: string;
  company: string;
  start_date?: string;
  end_date?: string;
  role: string;
  introduction?: string[];
  description?: string[];
}

export interface ProjectCard {
  id: number;
  image?: string;
  link?: string;
  repositoryLink?: string;
  title: string;
  subtitle: string;
  date: string;
  introduction?: string[];
  description?: string[];
}

export interface SkillCategory {
  Frontend?: string[];
  Backend?: string[];
  Devops?: string[];
  Database?: string[];
}
