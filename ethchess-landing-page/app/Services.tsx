import Image from "next/image";
import Crown from "../public/image/clock.png";

export default function Services() {
  return (
    <section className="w-screen h-screen px-20 py-4 bg-linear-to-b from-[#1617361A] via-[#421B6C66] to-[#1617361A]">
      <h2 className="  md:text-3xl text- text-white text-center">
        Everything You Need To Excel
      </h2>
      <p className="text-center ">
        Our comprehensive platform provides all the tools and features you need
        to improve your <br /> chess game and connect with the community{" "}
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-4 w-full">
        <div className="flex-col px-6 py-8 justify-around w-64 space-y-4 bg-[#2A364D73] rounded-2xl">
          <div className="p-2 size-10 bg-[#4F6184] rounded-2xl mx-auto">
            <Image src={Crown} alt="" className="" />
          </div>
          <h5 className="text-sm text-center">Dynamic Leaderboard</h5>
          <p className="text-[10px] text-center">
            Track your progress with real-time ranking across different
            categories and time period
          </p>
        </div>
      </div>
    </section>
  );
}
