import React from 'react';
import { images } from '../assets';

const { hello } = images;

const Header = () => {
  return (
    <div className="flex flex-col gap-2 mx-4 md:px-[20%]">
      <div className="flex justify-center items-center gap-2 ">
        <img src={hello} alt="" className="w-10 h-10" />
        <span className="text-xl font-bold capitalize text-center">
          Hello, I'm Manuchim
        </span>
      </div>
      <span className="text-lg font-semibold capitalize text-center">
        This is my submission for the Web Developer Evaluation Task
      </span>
    </div>
  );
};

export default Header;
