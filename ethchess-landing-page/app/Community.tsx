import Image from "next/image";
import React from "react";
import Peoples from "../public/image/peoples.png";
function Community() {
  return (
    <section className="w-screen md:h-screen  bg-linear-45 px-6 from-[#392561] to-[#754CC7]">
      <h3 className="text-center md:text-3xl py-6">Growing Chess Community</h3>
      <p className="text-center md:text-xl mb-6">
        Join thousands of chess enthusiasts who sre already improving their game
        with ETHCHESS Club
      </p>
      <div className="flex flex-wrap justify-around items-center md:mt-24 space-y-4 md:space-y-0">
        <div className=" space-y-4 border bg-[#2A364D4D] border-[#465573] rounded-2xl px-12 py-6">
          <div className="p-4 mx-auto rounded-full size-20 bg-[#3C3167]">
            <Image src={Peoples} alt="" className="" />
          </div>
          <div className="flex justify-center items-end">
            <h5 className="text-white text-2xl">1,247</h5>
            <span className="text-[#2457C5] text-[14px] flex align-bottom">
              +12%
            </span>
          </div>
          <p className="text-center">Active players</p>
        </div>
        <div className=" space-y-4 border bg-[#2A364D4D] border-[#465573] rounded-2xl px-12 py-6">
          <div className="p-4 mx-auto rounded-full size-20 bg-[#3C3167]">
            <Image src={Peoples} alt="" className="" />
          </div>
          <div className="flex justify-center items-end">
            <h5 className="text-white text-2xl">1,247</h5>
            <span className="text-[#2457C5] text-[14px] flex align-bottom">
              +12%
            </span>
          </div>
          <p className="text-center">Active players</p>
        </div>
        <div className=" space-y-4 border bg-[#2A364D4D] border-[#465573] rounded-2xl px-12 py-6">
          <div className="p-4 mx-auto rounded-full size-20 bg-[#3C3167]">
            <Image src={Peoples} alt="" className="" />
          </div>
          <div className="flex justify-center items-end">
            <h5 className="text-white text-2xl">1,247</h5>
            <span className="text-[#2457C5] text-[14px] flex align-bottom">
              +12%
            </span>
          </div>
          <p className="text-center">Active players</p>
        </div>
        <div className=" space-y-4 border bg-[#2A364D4D] border-[#465573] rounded-2xl px-12 py-6">
          <div className="p-4 mx-auto rounded-full size-20 bg-[#3C3167]">
            <Image src={Peoples} alt="" className="" />
          </div>
          <div className="flex justify-center items-end">
            <h5 className="text-white text-2xl">1,247</h5>
            <span className="text-[#2457C5] text-[14px] flex align-bottom">
              +12%
            </span>
          </div>
          <p className="text-center">Active players</p>
        </div>
      </div>
    </section>
  );
}

export default Community;
