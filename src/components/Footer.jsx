import React from "react";
import FaceBook from "../assets/icon/facebook.svg";
import Instagram from "../assets/icon/insta.svg";
import Fly from "../assets/icon/burd.svg";
import In from "../assets/icon/in.svg";

export const Footer = () => {
  return (
    <footer className=" w-[100%] h-[182px] flex flex-col items-center gap-[26px]">
      <div className="flex gap-[35px] justify-center items-center">
        <img src={FaceBook} alt="" />
        <img src={Instagram} alt="" />
        <img src={Fly} alt="" />
        <img src={In} alt="" />
      </div>
      <p>Copyright ©2020 All rights reserved </p>
    </footer>
  );
};
