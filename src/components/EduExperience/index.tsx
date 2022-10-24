import { Education } from '@/types';
import React from 'react';
import { DateTime } from 'luxon';
export default function EduExperience({ experience }: { experience: Education }) {
  return (
    <div className="w-full flex flex-col items-start justify-start mb-3">
      <div className="inline text-sm md:text-lg font-bold whitespace-nowrap">{experience.school}</div>
      <div className="text-xs md:text-md whitespace-nowrap">
        {experience.degree}{' '}
        {experience.gpa && (
          <span>
            <span className="font-semibold">GPA:</span>
            {`${experience.gpa.toFixed(2)}`}
          </span>
        )}
      </div>
      <div className="text-xs flex-1 whitespace-nowrap">
        {experience.from}-{experience.to > DateTime.local().year ? 'present' : experience.to}
      </div>
      <div className="work-experience__items">
        <ul className="list-disc ml-4 w-11/12">
          {experience.items?.map((item) => (
            <div className="" key={item}>
              <li className="text-xs md:text-sm">{item}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
