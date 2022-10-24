import { PsychSkill } from '@/types';

export const psychSkills: PsychSkill[] = [
  {
    id: 'psy-cbt',
    title: 'CBT',
    subtitle: 'Cognitive Behavioral Therapy',
    proficiency: 95,
    years: 14,
    priority: 1,
    description: 'group/individual',
    rgbal: 'rgba(55, 55, 55, 0.8)',
    rgbad: 'rgba(155, 155, 155, 0.8)',
  },
  {
    id: 'psy-dbt',
    title: 'DBT',
    subtitle: 'Dialectical Behavior Therapy',
    proficiency: 65,
    years: 3,
    priority: 1,
    description: 'group/individual',
    rgbal: 'rgba(155, 55, 55, 0.8)',
    rgbad: 'rgba(255, 155, 155, 0.8)',
  },
  {
    id: 'psy-psychodynamic',
    title: 'Psychodynamic',
    proficiency: 85,
    years: 15,
    priority: 1,
    description: 'Psychotherapy - group/individual',
    rgbal: 'rgba(55, 155, 55, 0.8)',
    rgbad: 'rgba(155, 255, 155, 0.8)',
  },
];
