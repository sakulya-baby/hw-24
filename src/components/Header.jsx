import React from "react";

import JohnImage from "../assets/img/Ellipse 1.png";

export const Header = () => {
  return (
    <header className="w-[100%] h-[80vh] bg-[white]  ">
      <nav className="flex gap-[33px] w-[100%] flex justify-end pr-[60px] pt-[27px] font-bold">
        <a href="#" className="text-lg">
          Works
        </a>
        <a className="text-lg" href="#">
          Blog
        </a>
        <a className="text-lg" href="#">
          Contact
        </a>
      </nav>
      <div className="flex justify-evenly mt-[210px]">
        <div className="flex flex-col gap-[45px]">
          <h1 className="w-[506px] h-[105px] font-bold text-[3rem]">
            Hi, I am John, Creative Technologist
          </h1>
          <p className="w-[497px] h-[66px] font-bold text-[1rem]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <button className="w-[208px] h-[47px] bg-[red] text-[white] text-lg font-medium">
            Download Resume
          </button>
        </div>
        <img className="w-[243px] h-[243px]" src={JohnImage} alt="" />
      </div>
    </header>
  );
};
