import React from 'react';
import '../pages/Home.css'

const CallToAction = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-sm pl-42 rounded-2xl m-20 pt-12 gap-20 max-w-5xl w-full bg-transparent">
      <div className="flex flex-col text-center md:text-left items-center md:items-start pt-14 md:p-10">
        <h2 className="md:text-4xl text-2xl font-bold text-gray-800">
          Boost your productivity.<br />Start using our app today.
        </h2>

        <div className="flex items-center gap-4 mt-6">
          <button
            type="button"
            aria-label="getStarted"
            className="bg-indigo-500 hover:bg-indigo-600 px-7 py-2.5 text-white rounded-md active:scale-95 transition-all"
          >
            Get started
          </button>
          <button
            type="button"
            className="group flex items-center gap-2 px-7 py-2.5 active:scale-95 transition"
          >
            Learn more
            <svg
              className="mt-1 group-hover:translate-x-0.5 transition-all"
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.5h13.092M8.949 1l5.143 4.5L8.949 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <img
        className="max-w-[375px] pt-10 md:p-0"
        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/excitedWomenImage.png"
        alt="excitedWomenImage"
      />
    </div>
  );
};

export default CallToAction;
