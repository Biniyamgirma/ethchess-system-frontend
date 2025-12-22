import React from "react";
import Image from "next/image";
import Logo from "../public/image/logo.png";
import Youtube from "../public/image/youtube.png";
import Instagram from "../public/image/instagram.png";
import Facebook from "../public/image/facebook.png";
import Tiwtter from "../public/image/tiwtter.png";
import Person from "../public/image/profile.png";
import Search from "../public/image/serch.png";
import Gmail from "../public/image/gmail.png";
function Header() {
  return (
    <>
      <div className=" md:flex-col bg-linear-to-r from-[#421B6C66] to-[#1617361A] p-0.5">
        <nav className="flex justify-between bg-linear-30 from-[#1617367a] to-[#421b6cc0] px-8 py-2 backdrop-blur-lg">
          <div className="flex w-1/4  gap-4 text-center ">
            <div className="size-4 text-white">
              <a href="">
                <Image
                  src={Instagram}
                  alt="Ethchess instagram icon"
                  className=""
                />
              </a>
            </div>
            <div className="size-4 text-white">
              <a href="">
                <Image
                  src={Youtube}
                  alt="Ethchess instagram icon"
                  className=""
                />
              </a>
            </div>
            <div className="size-4 text-white">
              <a href="">
                <Image
                  src={Instagram}
                  alt="Ethchess instagram icon"
                  className=""
                />
              </a>
            </div>
            <div className="size-4 text-white">
              <a href="">
                <Image
                  src={Facebook}
                  alt="Ethchess instagram icon"
                  className=""
                />
              </a>
            </div>
            <div className="size-4 text-white">
              <a href="">
                <Image
                  src={Tiwtter}
                  alt="Ethchess x.com account link "
                  className=""
                />
              </a>
            </div>
          </div>
          <div className="h-auto w-1/2 ">
            <div className="flex items-center justify-center text-2xl text-white">
              ETH{" "}
              <Image
                src={Logo}
                alt="ethchess logo"
                className="mx-2 size-8 rounded-full"
              />{" "}
              CHESS
            </div>
            <div>
              <ul className="flex h-12 min-w-11/12 items-end justify-around gap-8 text-sm text-white">
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li>
                  <a href="">Tournament</a>
                </li>
                <li>
                  <a href="">Leaderboard</a>
                </li>
                <li>
                  <a href="">Profile</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-11/12 w-1/4 flex justify-end  items-center ">
            <div className=" h-fit w-60 grid grid-cols-1 justify-end ">
              <div className="flex items-center justify-end gap-8 text-white">
                <div className="size-4">
                  <a href="">
                    <Image src={Search} alt="serch icon " />
                  </a>
                </div>
                <div className="size-4 text-white">
                  <a href="">
                    <Image src={Person} alt="profile icon" />
                  </a>
                </div>
                <div className="size-4 text-white">
                  <a href="">
                    <Image src={Gmail} alt="email icon" />
                  </a>
                </div>
              </div>
              <div>
                <button className="mt-6 ml-16 rounded-lg border border-white px-4 py-2 text-nowrap text-white hover:cursor-pointer hover:bg-white/30">
                  Join us
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* // nav bar for header */}
      <div className="max-w-screen hidden overflow-hidden">
        <div className="bg-linear-to-r w-full from-[#421B6C66] to-[#1617361A] p-0.5 h-[60px] flex items-center px-6 justify-between">
          <div className="text-white h-[40px] text-nowrap flex items-center">
            <h2>ETH</h2>
            img
            <h2>CHESS</h2>
          </div>
          <div id="hum-burger" className="">
            <button className="hidden">I</button>
            <button className="">X</button>
          </div>
        </div>
        <ul className="hidden bg-green-400 rounded-b-2xl px-6">
          <li className="py-2">
            <a href="">Dashboard</a>
          </li>
          <li className="py-2">
            <a href="">Tournament</a>
          </li>
          <li className="py-2">
            <a href="">Leaderboard</a>
          </li>
          <li className="py-2">
            <a href="">Profile</a>
          </li>
          <li className="py-2">
            <button className="rounded-2xl w-full bg-amber-300 text-center py-2 text-black">
              Join Us
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
