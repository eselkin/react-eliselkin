export interface Work {
  from: number;
  to: number;
  company: string;
  position: string;
  description?: string;
  items?: string[];
  skills: string[];
}

export interface Education {
  from: number;
  to: number;
  school: string;
  degree: string;
  description?: string;
  gpa?: number;
  items?: string[];
}

export interface Skill {
  id: string;
  title: string;
  years: number;
  priority: number;
  subtitle?: string;
  description?: string;
  rgbal: string;
  rgbad: string;
}

export interface PsychSkill extends Skill {
  proficiency: number;
}

export interface TechSkill extends Skill {
  algorithmicLevel: number;
  appliedLevel: number;
  familiarityLevel: number;
  mentorshipLevel: number;
}

export interface Resume {
  work_experience: Work[];
  education: Education[];
  technical_skills: TechSkill[];
  psychotherapy_skills: PsychSkill[];
}
