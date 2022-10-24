import { Education } from '@/types';

export const educationExperiences: Education[] = [
  {
    from: 1997,
    to: 2001,
    school: 'Syracuse University',
    degree: 'B.A. Psychology',
    items: [
      'Residence Hall Association',
      'Lab associate for neuropsychology lab - Dr. Catherine Cornwell',
      'Founding brother, Phi Kappa Theta fraternity, NY Tau',
    ],
  },
  {
    from: 2001,
    to: 2003,
    school: 'California State University, Los Angeles',
    degree: 'M.S.W. Social Work',
    items: ['MSW Student Organization - Treasurer', 'Specialization in Aging and Familes'],
    gpa: 3.763,
  },
  {
    from: 2013,
    to: 2016,
    school: 'Pasadena City College',
    degree: 'N/A equivalent to A.S. Computer Science',
    gpa: 3.659,
    items: [
      'Relevant courses: Math (Linear Algebra, Differential Equations), Bioinformatics, CS (C++, JAVA, Python, x86 Assembly, Circuit Logic)',
    ],
  },
  {
    from: 2016,
    to: 2019,
    school: 'California State Polytechnic University, Pomona',
    degree: 'M.S. Computer Science',
    gpa: 4.0,
    items: [
      'Relevant courses: Computer Vision, Large Scale Graph Processing, Advanced Machine Learning, Parallel Algorithms',
      'Thesis on using CNN & RNN combination to track, localize, and phenotype mouse behavior from video.',
    ],
  },
];
