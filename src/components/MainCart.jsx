import React from "react";

export const MainCart = () => {
  return (
    <div
      className="w-[100%] h-[24.75rem] 
      bg-[#4cc0e4] 
 "
    >
      <div className="flex justify-around pt-[27px] gap-[448px]">
        <p className="text-[1.5rem]">Recent posts</p>
        <a href="#" className="text-[blue]">
          View all
        </a>
      </div>
      <section className="flex justify-evenly ">
        <article className="bg-[white] w-[418px] h-[295px] flex flex-col gap-[17px] pl-[23px] pt-[24px] ">
          <h1 className="font-[700] w-[374px] h-[85px] text-[26px]">
            Making a design system from scratch
          </h1>
          <div className="flex gap-[15px]  ">
            <p>12 Feb 2020</p>
            <span>|</span>
            <p>Design, Pattern</p>
          </div>
          <div className="w-[368px] h-[117px] flex ">
            <span>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
          </div>
        </article>
        <article className="bg-[white] w-[418px] h-[295px] flex flex-col gap-[17px] pl-[23px] pt-[24px] ">
          <h1 className="font-[700] w-[374px] h-[85px] text-[26px]">
            Making a design system from scratch
          </h1>
          <div className="flex gap-[15px]  ">
            <p>12 Feb 2020</p>
            <span>|</span>
            <p>Design, Pattern</p>
          </div>
          <div className="w-[368px] h-[117px] flex ">
            <span>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
          </div>
        </article>
      </section>
    </div>
  );
};
