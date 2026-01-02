import React from "react";
import Image from "next/image";
import Peoples from "../public/image/icon.png";
import Wancha from "../public/image/wancha.png";
import Crown from "../public/image/crown1.png";
function Achivments() {
  return (
    <div
      id="need-tobe-hidden"
      className="w-100vh md:hidden grid h-screen grid-cols-1 items-center justify-center overflow-hidden bg-linear-30 from-[#161736] to-[#421b6c] p-4 backdrop-blur-lg"
    >
      <div className="mx-auto grid w-1/2 grid-cols-1 space-y-3">
        <div className="flex justify-center ">
          <div className="rounded-full p-4 bg-amber-200/30">
            <Image src={Peoples} alt="" className="size-12" />
          </div>
        </div>
        <h6 className="text-center text-4xl text-[#FFFFFF] font-bold">
          1,250+
        </h6>
        <p className="wrap-nowrap text-center text-xl font-light text-[#C5C5C5]">
          Active Members
        </p>
      </div>
      <div className="mx-auto grid w-1/2 grid-cols-1 space-y-3">
        <div className="flex justify-center space-y-4">
          <div className="rounded-full p-4 bg-amber-200/30">
            <Image src={Wancha} alt="" className="size-12" />
          </div>
        </div>
        <h6 className="text-center text-4xl text-[#FFFFFF] font-bold">500+</h6>
        <p className="wrap-nowrap text-center text-xl font-light text-[#C5C5C5]">
          Tournaments
        </p>
      </div>
      <div className="mx-auto grid w-1/2 grid-cols-1 space-y-3">
        <div className="flex justify-center space-y-4">
          <div className="rounded-full p-4 bg-amber-200/30">
            <Image src={Crown} alt="" className="size-12" />
          </div>
        </div>
        <h6 className="text-center text-4xl text-[#FFFFFF] font-bold">10k+</h6>
        <p className="wrap-nowrap text-center text-xl font-light text-[#C5C5C5]">
          Games Played
        </p>
      </div>
    </div>
  );
}

export default Achivments;
