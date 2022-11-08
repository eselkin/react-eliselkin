import { TechSkill, PsychSkill } from '@/types';
import React from 'react';

export default function SkillExp({
  skill,
  selected,
  isDark,
  onClick,
}: {
  skill: TechSkill | PsychSkill;
  selected: boolean;
  isDark: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`${isDark ? 'text-white' : 'text-black'} basis-full md:basis-1/4 bg-info p-2 rounded-sm shadow-lg m-1`}
      onClick={onClick}
    >
      <div>
        <div className="font-semibold text-lg">
          <h3>{skill.title}</h3>
        </div>
        {(skill as TechSkill).algorithmicLevel > 0 && (
          <div className={`text-sm ${!selected && 'hidden'}`}>
            <span>Algo level: {(skill as TechSkill).algorithmicLevel}</span>
          </div>
        )}
        {(skill as TechSkill).appliedLevel > 0 && (
          <div className={`text-sm ${!selected && 'hidden'}`}>
            <span>Applied: {(skill as TechSkill).appliedLevel}</span>
          </div>
        )}
        {(skill as TechSkill).familiarityLevel > 0 && (
          <div className={`text-sm ${!selected && 'hidden'}`}>
            <span>Ease of use: {(skill as TechSkill).familiarityLevel}</span>
          </div>
        )}
        {(skill as TechSkill).mentorshipLevel > 0 && (
          <div className={`text-sm ${!selected && 'hidden'}`}>
            <span>Desire to mentor: {(skill as TechSkill).mentorshipLevel}</span>
          </div>
        )}
        {(skill as PsychSkill).proficiency > 0 && (
          <div className={`text-sm ${!selected && 'hidden'}`}>
            <span>Proficiency: {(skill as PsychSkill).proficiency}</span>
          </div>
        )}
      </div>
      <div className={`mt-2 text-md ${!selected && 'hidden'}`}>{skill.description}</div>
    </div>
  );
}
