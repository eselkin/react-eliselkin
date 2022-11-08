import { useState } from 'react';
import Resume from '@/views/Resume';
import Therapy from '@/views/Therapy';
import { Bars4Icon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export default function App() {
  const [view, setView] = useState('resume');
  const [isDark, setIsDark] = useState(false);
  const [hovering, setIsHovering] = useState(true);
  return (
    <div className={'App bg-base-100'} data-theme={`${isDark ? 'dark' : 'corporate'}`}>
      <div className={`${isDark ? 'bg-base-300' : 'bg-base-content'} navbar py-4`}>
        <div className="dropdown basis-1/6">
          <label tabIndex={0} className="btn btn-ghost btn-circle btn-sm">
            <Bars4Icon className="stroke-white" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content shadow bg-base-300 w-64 text-white lg:menu-normal rounded-box"
          >
            <li className={`${view === 'therapy' && 'bg-primary'}`}>
              <a onClick={() => setView('therapy')}>Therapy</a>
            </li>
            <li className={`inline ${view === 'resume' && 'bg-primary'}`}>
              <a onClick={() => setView('resume')}>Resume</a>
            </li>
          </ul>
        </div>
        <div className={'basis-5/6 flex-grow w-full justify-center flex flex-col text-white'}>
          <div className={'text-3xl md:text-4xl xl:text-6xl'}>
            <a href="mailto:eli@eliselkin.com" target={'_blank'} rel="noopener noreferrer">
              Eli Selkin
            </a>
          </div>
          <div className="inline text-xs md:text-lg md:ml-2">
            <a
              href="https://search.dca.ca.gov/details/2002/LCSW/27109/4b136c27710dfa9919390d9d1db417e0"
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              L.C.S.W.<span className={`${hovering ? 'inline-block mx-1' : 'hidden'}`}> BBS CA LCS#27109 </span>,
              M.S.(cs)
            </a>
          </div>
        </div>
        <div className="basis-1/6 items-end justify-end">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className="toggle"
                onChange={() => {
                  setIsDark((isDark) => !isDark);
                }}
                checked={isDark}
              />
              <span className={`label-text ml-3 ${isDark ? 'text-white' : 'text-gray-500'}`}>
                {isDark ? (
                  <MoonIcon className="w-6 h-6 fill-white" />
                ) : (
                  <SunIcon className="w-6 h-6 font-bold stroke-2 stroke-white fill-white" />
                )}
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        {view === 'resume' && <Resume onMouseEnter={() => {}} isDark={isDark} />}
        {view === 'therapy' && <Therapy onMouseEnter={() => {}} />}
      </div>
    </div>
  );
}
