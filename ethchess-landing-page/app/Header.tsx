import React from "react";
import Image from "next/image";
import Ethchess from "../public/image/ethchess.png";
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
      <div className="hidden md:flex-col bg-linear-to-r from-[#421B6C66] to-[#1617361A] ">
        <nav className="flex justify-between bg-linear-to-r from-[#392561] to-[#754CC7] px-8 py-2 backdrop-blur-lg">
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
            <div className="font-bold flex items-center justify-center space-x-2 text-2xl text-white">
              ETH{" "}
              <Image
                src={Ethchess}
                alt="ethchess logo"
                className=" size-8 rounded-full"
              />{" "}
              CHESS
            </div>
            <div>
              <ul className="font-light flex h-12 min-w-11/12 items-end justify-around gap-8 text-sm text-white">
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
      <div className="max-w-screen md:hidden overflow-hidden mb-8">
        <div className="absolute top-0 left-0 right-0 z-50">
          <div className=" w-full bg-linear-to-r from-[#392561] to-[#754CC7] p-0.5 h-[60px] flex items-center px-6 justify-between">
            <div className="text-white size-8 text-nowrap flex items-center font-semibold">
              <h2>ETH</h2>
              <Image
                src={Ethchess}
                alt="Ethchess instagram icon"
                className="size-8"
              />
              <h2>CHESS</h2>
            </div>
            <div id="hum-burger" className="flex justify-center items-center">
              <button className="hidden">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 17H8M12 17H20M4 12H20M4 7H12M16 7H20"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button className="">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z"
                    fill="#fff"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z"
                    fill="#fff"
                  />
                </svg>
              </button>
            </div>
          </div>
          <ul className=" bg-[#754CC7] backdrop-blur-md hidden space-y-4 rounded-b-2xl px-6">
            <li className="pt-3">
              <a href="#">Dashboard</a>
            </li>
            <li className="py-2">
              <a href="#">Tournament</a>
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
      </div>
    </>
  );
}

export default Header;
