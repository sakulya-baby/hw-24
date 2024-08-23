import React from "react";
import Img1 from "../assets/img/Rectangle 30.png";
import Img2 from "../assets/img/img2.png";
import Img3 from "../assets/img/img3.png";

export const Main = () => {
  return (
    <main className="w-[100%] h-[100vh] flex flex-col items-center mt-[15px]">
      <div className="flex flex-col gap-[22px] ">
        <h3 className="ml-[10px]">Featured works</h3>
        <div className="flex gap-[18px] justify-center border-b-[1px] p-[10px]">
          <img className="w-[246px] h-[180px]" src={Img1} alt="" />
          <section className="flex flex-col gap-[16px]">
            <h1>Designing Dashboards</h1>
            <div className="flex gap-[26px] text-[gray]">
              <p className=" bg-[black] text-[white]  rounded-[16px] w-[62px] h-[25px] pl-[12.5px]">
                2020
              </p>
              <p>Dashboard</p>
            </div>
            <p className="w-[37.125rem] h-[5.813rem] font-extralight text-[1rem]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </section>
        </div>

        <div className="flex gap-[18px] justify-center border-b-[1px] p-[10px]">
          <img className="w-[246px] h-[180px]" src={Img2} alt="" />
          <section className="flex flex-col gap-[16px]">
            <h1>Designing Dashboards</h1>
            <div className="flex gap-[26px] text-[gray]">
              <p className=" bg-[black] text-[white]  rounded-[16px] w-[62px] h-[25px] pl-[12.5px]">
                2020
              </p>
              <p>Dashboard</p>
            </div>
            <p className="w-[37.125rem] h-[5.813rem] font-extralight text-[1rem]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </section>
        </div>
        <div className="flex gap-[18px] justify-center border-b-[1px] p-[10px]">
          <img className="w-[246px] h-[180px]" src={Img3} alt="" />
          <section className="flex flex-col gap-[16px]">
            <h1>Designing Dashboards</h1>
            <div className="flex gap-[26px] text-[gray]">
              <p className=" bg-[black] text-[white]  rounded-[16px] w-[62px] h-[25px] pl-[12.5px]">
                2020
              </p>
              <p>Dashboard</p>
            </div>
            <p className="w-[37.125rem] h-[5.813rem] font-extralight text-[1rem]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};
