import React from "react";
import Image from "next/image";
import ETHchessLogo from "../public/image/ethchess.png";
import Email from "../public/image/email.png";
import Phone from "../public/image/phone.png";

import Youtube from "../public/image/youtube.png";
import Instagram from "../public/image/instagram.png";
import Facebook from "../public/image/facebook.png";
import Tiwtter from "../public/image/tiwtter.png";
import Person from "../public/image/profile.png";
import Search from "../public/image/serch.png";
import Gmail from "../public/image/gmail.png";

function Footer() {
  return (
    <footer className="text-white bg-[#141731] ">
      <div className="flex flex-col md:flex-row justify-between px-12 py-8">
        <div className="space-y-4 md:space-y-8 md:w-1/3 w-11/12">
          <div className="flex h-12 w-fit items-center font-bold justify-center space-x-2 text-3xl md:text-2xl">
            ETH
            <Image src={ETHchessLogo} alt="" className="size-8" /> CHESS
          </div>
          <div className=" ">
            <p className="  md:text-lg font-light text-[#D6DCE8] ">
              Connecting chess players, tournaments, and community across
              Ethiopia, one move at a time.
            </p>
          </div>
          <div className="flex-col space-y-4 font-light text-[#D6DCE8]">
            <div className="">
              <a href="" className="flex h-4 items-center md:size-6 space-x-2">
                <Image src={Email} alt="email icon" className="size-4" />
                <p>Support@ethchess.com</p>
              </a>
            </div>
            <div className="">
              <a href="" className="flex h-4  items-center md:size-6 space-x-2">
                <Image src={Phone} alt="phone" className="size-4" />
                <p>+252972788430</p>
              </a>
            </div>
            <div className="">
              <a href="" className="flex h-4 items-center md:size-6 space-x-2">
                <Image src={Email} alt="location" className="size-4" />
                <p>Ethiopia</p>
              </a>
            </div>
          </div>
          <div className="flex size-6 space-x-6  my-4 md:my-0">
            <Image src={Instagram} alt="instagram logo image" />
            <Image src={Tiwtter} alt="tiwtter log" />

            <Image src={Facebook} alt="facebook logo" />
            <Image src={Gmail} alt="gmail logo" />
            <Image src={Youtube} alt="youtub logo" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row pl-4 my-12 md:my-0 md:space-x-16 space-y-6 md:space-y-0">
          <ul className="space-y-2  text-sm font-light text-[#D6DCE8]">
            <li className="font-semibold md:text-xl pb-2">Chess Community</li>
            <li>
              <a href="">Leader-board</a>
            </li>
            <li>
              <a href="">Upcoming Tournaments</a>
            </li>
            <li>
              <a href="">Blog / Brilliant Moves</a>
            </li>
            <li>
              <a href="">Lichess Club Link</a>
            </li>
          </ul>
          <ul className="space-y-2 text-sm font-light text-[#D6DCE8]">
            <li className="font-semibold md:not-first:text-xl pb-2">
              Chess Community
            </li>
            <li>
              <a href="">Leader-board</a>
            </li>
            <li>
              <a href="">Upcoming Tournaments</a>
            </li>
            <li>
              <a href="">Blog / Brilliant Moves</a>
            </li>
            <li>
              <a href="">Lichess Club Link</a>
            </li>
          </ul>
          <ul className="space-y-2 text-sm font-light text-[#D6DCE8]">
            <li className="font-semibold md:text-xl pb-2 ">Chess Community</li>
            <li>
              <a href="">Leader-board</a>
            </li>
            <li>
              <a href="">Upcoming Tournaments</a>
            </li>
            <li>
              <a href="">Blog / Brilliant Moves</a>
            </li>
            <li>
              <a href="">Lichess Club Link</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-8 mt-16 w-screen flex justify-center items-center rounded-t-3xl bg-[#FFC610] text-center text-[#141731]">
        &copy; copy 2026 ETHchess ETHIOPIA
      </div>
    </footer>
  );
}

export default Footer;
