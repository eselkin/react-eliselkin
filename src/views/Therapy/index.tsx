import React from 'react';
import headshot from '@/assets/images/headshot.jpg';
export default function Therapy({ onMouseEnter }: { onMouseEnter: () => void }) {
  return (
    <div className="therapy pt-8" onMouseEnter={onMouseEnter}>
      <div className="lg:flex lg:flex-row items-start justify-around">
        <div className="w-1/2 md:w-[340px] mx-auto rounded-lg !important">
          <img
            src={headshot}
            alt="headshot"
            className="w-10/12 mx-auto transition ease-in-out duration-300 hover:scale-[120%] hover:-translate-y-1 rounded-xl !important"
          />
        </div>
      </div>
      <div className="lg:flex lg:flex-row items-start justify-around prose mx-auto">
        <div className="w-full p-4">
          <div className="flex flex-col items-center">
            <h2 className="w-full border-b-2 border-black text-xl text-center my-3">Thereaputic Context</h2>
            <p className="prose">
              I believe that therapy with the right therapist can be a powerful tool for change. But I know that not all
              therapists are able to understand us and so perhaps:
              <ul>
                <li>you haven&apos;t tried therapy yet;</li>
                <li>you felt frustrated in therapy;</li>
                <li>your experience was not something that enhanced your situation in life;</li>
              </ul>
            </p>
            <p>Whatever the situation, it is important to know that you are not alone.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
