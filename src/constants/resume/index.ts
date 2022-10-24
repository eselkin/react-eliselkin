import { Resume } from '@/types';
import { psychSkills } from '@/constants/resume/psychSkills';
import { techSkills } from '@/constants/resume/techSkills';
import { workExperiences } from '@/constants/resume/workExperiences';
import { educationExperiences } from '@/constants/resume/educationExperiences';

/* eslint-disable camelcase */
export const resume: Resume = {
  work_experience: workExperiences,
  education: educationExperiences,
  technical_skills: techSkills,
  psychotherapy_skills: psychSkills,
};
