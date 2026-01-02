import Image from "next/image";
import React from "react";
import Peoples from "../public/image/peoples.png";
import Wancha from "../public/image/wancha.png";
import Clock from "../public/image/clock.png";

function Community() {
  return (
    <section className="w-screen md:h-screen  bg-linear-45 px-6 from-[#392561] to-[#754CC7]">
      <div className="py-6 space-y-4">
        <h3 className="text-[28px] font-bold  md:text-4xl  text-white text-center">
          Growing Chess Community
        </h3>
        <p className="text-center text-[12px] md:text-xl font-extralight">
          Join thousands of chess enthusiasts who sre already improving their
          game with ETHCHESS Club
        </p>
      </div>

      <div className="flex flex-wrap justify-around items-center md:mt-24 space-y-4 md:space-y-0">
        <div className=" space-y-4 border bg-[#2A364D4D] border-[#465573] rounded-2xl size-64 py-6">
          <div className="p-4 mx-auto rounded-full size-20 bg-[#3C3167]">
            <Image src={Peoples} alt="" className="" />
          </div>
          <div className="flex justify-center items-end">
            <h5 className="text-white text-3xl font-bold">1,247</h5>
            <span className="text-[#2457C5] font-bold text-[14px] flex align-bottom">
              +12%
            </span>
          </div>
          <p className="text-center font-semibold text-[#DAD8D8]">
            Active players
          </p>
        </div>
        <div className=" space-y-4 border bg-[#2A364D4D] border-[#465573] rounded-2xl size-64 py-6">
          <div className="p-4 mx-auto rounded-full size-20 bg-[#3C3167]">
            <Image src={Wancha} alt="" className="" />
          </div>
          <div className="flex justify-center items-end">
            <h5 className="text-white text-3xl font-bold">523</h5>
            <span className="text-[#D8A353] font-bold text-[14px] flex align-bottom">
              +8%
            </span>
          </div>
          <p className="text-center font-semibold text-[#DAD8D8] ">
            Tournament Hosted
          </p>
        </div>
        <div className=" space-y-4 border bg-[#2A364D4D] border-[#465573] rounded-2xl size-64 py-6">
          <div className="p-4 mx-auto rounded-full size-20 bg-[#3C3167]">
            <Image src={Peoples} alt="" className="" />
          </div>
          <div className="flex justify-center items-end">
            <h5 className="text-white text-3xl font-bold">12,847</h5>
            <span className="text-[#00E1FF] font-bold text-[14px] flex align-bottom">
              +24%
            </span>
          </div>
          <p className="text-center font-semibold text-[#DAD8D8]">
            Game Played
          </p>
        </div>
        <div className=" space-y-4 border bg-[#2A364D4D] border-[#465573] rounded-2xl size-64 py-6">
          <div className="p-4 mx-auto rounded-full size-20 bg-[#3C3167]">
            <Image src={Clock} alt="" className="" />
          </div>
          <div className="flex justify-center items-end">
            <h5 className="text-white text-3xl font-bold">1,247</h5>
            <span className="text-[#8B2CF5] text-[14px] font-bold flex align-bottom">
              +12%
            </span>
          </div>
          <p className="text-center font-semibold text-[#DAD8D8]">
            Active players
          </p>
        </div>
      </div>
    </section>
  );
}

export default Community;
