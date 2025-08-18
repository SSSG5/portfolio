import React from "react";

const Timeline = () => {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="font-poppins text-2xl">Recent Updates</h2>
      <ul>
        <li className="relative flex gap-6 pb-8">
          <div className="before:absolute before:left-[8px] before:top-2 before:h-full before:w-1 before:bg-[#00df9a]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                fill="#00df9a"
              />
            </svg>
          </div>
          <div className="font-inter text-base w-80 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="font-medium text-lg">Vishwakarma University</p>
                <p className="font-normal text-sm">2023 - 2027</p>
              </div>
              <p className="">Pursuing Bachelor in Computer Engineering</p>
            </div>
          </div>
        </li>
        <li className="relative flex gap-6 pb-8">
          <div className="before:absolute before:left-[8px] before:top-2 before:h-full before:w-1 before:bg-[#00df9a]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                fill="#00df9a"
              />
            </svg>
          </div>
          <div className="font-inter text-base w-80 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="font-medium text-lg">Higher Secondary Certificate Board</p>
                <p className="font-normal text-sm">2021 - 2023</p>
              </div>
              <p className="">JEE, CET and what not!</p>
            </div>
          </div>
        </li>
        <li className="relative flex gap-6 pb-8">
          <div className="">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                fill="#00df9a"
              />
            </svg>
          </div>
          <div className="font-inter text-base w-80 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="font-medium text-lg">Sri Sri Ravishankar Vidya Mandir, CBSE</p>
                <p className="font-normal text-sm">2012 - 2021</p>
              </div>
              <p className="">ABCD, 1234, grammer, etc.</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
