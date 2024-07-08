import React from 'react';
import { FaReact } from 'react-icons/fa';

const Timeline = () => {
  return (
    <div className="relative px-4 md:px-10 lg:px-20 mt-12 bg-transparent text-white">
      <div className="text-3xl font-semibold flex items-center justify-center mb-8 text-center flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 6h18M3 12h18m-6 6h6"
          />
        </svg>
        <span>Lorem ipsum</span>
      </div>
      <div className="relative flex flex-col items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-700"></div>

        {/* Experience Item */}
        {[
          {
            title: 'Lorem ipsum',
            company: 'Lorem ipsum',
            date: 'Lorem ipsum',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mauris vel metus elementum malesuada.',
            linkText: 'Lorem ipsum >',
            linkHref: '#',
          },
          {
            title: 'Lorem ipsum',
            company: 'Lorem ipsum',
            date: 'Lorem ipsum',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mauris vel metus elementum malesuada.',
          },
          {
            title: 'Lorem ipsum',
            company: 'Lorem ipsum',
            date: 'Lorem ipsum',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mauris vel metus elementum malesuada.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative flex items-center w-full max-w-3xl mb-12"
          >
            <div className="relative flex flex-col items-center w-full overflow-hidden rounded-lg p-[1px]">
              <span className="absolute inset-0 animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
              <div className="relative w-full bg-slate-950 rounded-lg p-6 flex flex-col items-center text-center">
                <FaReact className="text-yellow-500 w-8 h-8 mb-2" />
                <div className="w-full">
                  <h3 className="text-lg font-semibold text-yellow-500">
                    {item.title}
                  </h3>
                  <h4 className="text-md text-gray-400">{item.company}</h4>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
                <div className="w-full mt-4">
                  <p className="text-sm text-gray-300">{item.description}</p>
                  {item.linkText && (
                    <a
                      href={item.linkHref}
                      className="text-yellow-500 hover:underline mt-2 inline-block"
                    >
                      {item.linkText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
