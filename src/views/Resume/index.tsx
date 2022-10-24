import { resume } from '@/constants/resume';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
} from 'chart.js';
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
);
import WorkExperience from '@/components/WorkExperience';
import SkillExp from '@/components/SkillExp';
import EduExperience from '@/components/EduExperience';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
export default function Resume({ onMouseEnter, isDark }: { onMouseEnter: () => void; isDark: boolean }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const footer = (items: any[]) => {
    let footerText = 'Info: ';
    for (const item of items) {
      footerText += item.dataset.info;
      footerText += ', Years:' + item.dataset.years;
    }
    return footerText;
  };
  const [tSkillSelectValue, setTSkillSelectValue] = React.useState(1);
  const [pSkills] = React.useState(resume.psychotherapy_skills.sort((a, b) => b.proficiency - a.proficiency));
  const [selectedTSkill, setSelectedTSkill] = React.useState('');
  const [selectedPSkill, setSelectedPSkill] = React.useState('');
  return (
    <div className="container mx-auto pt-8" onMouseEnter={onMouseEnter}>
      <div className="flex flex-row justify-around w-full md:w-1/2 mx-auto">
        <div>
          <a
            href="https://github.com/eselkin"
            className={`link ${isDark ? 'link-accent' : 'link-primary'}`}
            target="_blank"
            rel="noreferrer"
          >
            github@eselkin
            <ArrowTopRightOnSquareIcon className="inline w-4 h-4" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/eliselkin"
            className={`link ${isDark ? 'link-accent' : 'link-primary'}`}
            target="_blank"
            rel="noreferrer"
          >
            linkedin@eliselkin
            <ArrowTopRightOnSquareIcon className="inline w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="lg:flex lg:flex-row items-start justify-around">
        <div className="w-full lg:w-1/2 p-1 mr-4">
          <div className="flex flex-col items-center">
            <h2 className="w-full border-b-2 border-black text-xl text-center my-3">Work Experiences</h2>
            <div>
              {resume.work_experience
                .sort((a, b) => {
                  if (a.to > b.to) {
                    return -1;
                  }
                  if (a.to < b.to) {
                    return b.from - a.from;
                  }
                  return 0;
                })
                .map((workExperience) => (
                  <WorkExperience experience={workExperience} key={workExperience.company} />
                ))}
            </div>
            <h2 className="w-full border-b-2 border-black text-xl text-center my-3">Education</h2>
            <div>
              {resume.education
                .sort((a, b) => {
                  if (a.to > b.to) {
                    return -1;
                  }
                  if (a.to < b.to) {
                    return b.from - a.from;
                  }
                  return 0;
                })
                .map((eduExperience) => (
                  <EduExperience experience={eduExperience} key={eduExperience.school} />
                ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-1 lg:ml-4">
          <div className="flex flex-col items-center">
            <h2 className="w-full border-b-2 border-black text-xl text-center my-3">Technical Skills</h2>
            <div>
              <select
                className="select select-sm select-bordered w-56 mb-3  max-w-xs"
                value={tSkillSelectValue}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setTSkillSelectValue(parseInt(e.currentTarget.value));
                }}
              >
                <option value={1} label={'Languages'} />
                <option value={3} label={'Frameworks'} />
                <option value={2} label={'Systems'} />
              </select>
            </div>
            <div className="w-full block lg:hidden flex flex-wrap justify-center">
              {resume.technical_skills
                .filter((sk) => sk.priority == tSkillSelectValue)
                .map((skill) => (
                  <SkillExp
                    key={skill.id}
                    skill={skill}
                    selected={skill.id === selectedTSkill}
                    isDark={isDark}
                    onClick={() => setSelectedTSkill(skill.id)}
                  />
                ))}
            </div>
            <div className="hidden lg:block w-full">
              <Bar
                options={{
                  responsive: true,
                  scales: {
                    y: {
                      stacked: true,
                      display: false,
                      grid: {
                        color: isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.2)',
                        drawBorder: false,
                      },
                      ticks: {
                        color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)',
                      },
                    },
                    x: {
                      stacked: true,
                      grid: {
                        color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 0.2)',
                        display: false,
                      },
                      ticks: {
                        color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)',
                      },
                    },
                  },

                  plugins: {
                    subtitle: {
                      display: true,
                      color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)',
                      text: 'Comparative confidence in my own technical skills - not related to the skills of others.',
                      font: {
                        size: 12,
                        family: 'Roboto',
                      },
                    },
                    tooltip: {
                      callbacks: {
                        footer: footer,
                      },
                    },
                  },
                }}
                data={{
                  labels: ['Algorithmic level', 'Applied level', 'Familiarity', 'Mentorship ability'],
                  datasets: resume.technical_skills
                    .filter((sk) => sk.priority == tSkillSelectValue)
                    .map((skill) => ({
                      label: skill.title,
                      data: [skill.algorithmicLevel, skill.appliedLevel, skill.familiarityLevel, skill.mentorshipLevel],
                      backgroundColor: isDark ? skill.rgbad : skill.rgbal,
                      borderColor: isDark ? skill.rgbad : skill.rgbal,
                      fill: true,
                      info: skill.description,
                      years: skill.years,
                    })),
                }}
              />
            </div>
            <h2 className={`w-full border-b-2 ${isDark ? 'border-white' : 'border-black'} text-xl text-center my-3`}>
              Psychotherapy Skills
            </h2>
            <div className="w-full block lg:hidden flex flex-wrap justify-center space-y-2 > * + * md:space-x-2 > * + * ">
              {resume.psychotherapy_skills.map((skill) => (
                <SkillExp
                  key={skill.id}
                  skill={skill}
                  selected={skill.id === selectedPSkill}
                  isDark={isDark}
                  onClick={() => setSelectedPSkill(skill.id)}
                />
              ))}
            </div>
            <div className="w-full hidden lg:block">
              <Bar
                options={{
                  indexAxis: 'y',
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
                data={{
                  labels: pSkills.map((skill) => skill.title),
                  datasets: [
                    {
                      data: pSkills.map((sk) => sk.proficiency),
                      backgroundColor: pSkills.map((sk) => (isDark ? sk.rgbad : sk.rgbal)),
                      borderColor: pSkills.map((sk) => (isDark ? sk.rgbad : sk.rgbal)),
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
