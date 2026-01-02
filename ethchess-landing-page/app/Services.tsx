import Image from "next/image";
import Wancha from "../public/image/wancha.png";
import CrownPurple from "../public/image/crown.png";
import Community from "../public/image/peoples.png";
import Secure from "../public/image/secure.png";
import Clock from "../public/image/clock.png";
import Event from "../public/image/star.png";
import Global from "../public/image/global.png";
import Fast from "../public/image/fast.png";
export default function Services() {
  return (
    <section className="w-full flex-col justify-center items-center  space-y-4 px-20 py-4 bg-linear-to-b from-[#1617361A] via-[#421B6C66] to-[#1617361A]">
      <div className="py-6 space-y-4">
        <h2 className="text-[28px] font-bold  md:text-4xl  text-white text-center">
          Tournament System
        </h2>
        <p className="text-center text-[12px] md:text-xl font-extralight">
          Our comprehensive platform provides all the tools and features you
          need to improve your <br /> chess game and connect with the
          community{" "}
        </p>
      </div>
      <div className=" flex flex-wrap justify-center w-full gap-4 md:gap-6 pb-8">
        <div className="flex-col px-6 py-8 justify-around w-64 space-y-4 bg-[#2A364D73] border border-[#465573] rounded-2xl">
          <div className="p-2 size-10 bg-[#4F6184] rounded-2xl mx-auto">
            <Image src={Wancha} alt="" className="" />
          </div>
          <h5 className="text-sm text-center font-bold md:text-lg">
            Tournament System
          </h5>
          <p className="text-[10px] text-center font-normal text-[#E3E1E1]">
            Participate in a weekly tournaments with different time controls and
            formats.win the price and climb the rank
          </p>
        </div>
        <div className="flex-col px-6 py-8 justify-around w-64 space-y-4 bg-[#2A364D73] border border-[#465573] rounded-2xl">
          <div className="p-2 size-10 bg-[#4F6184] rounded-2xl mx-auto">
            <Image src={CrownPurple} alt="" className="" />
          </div>
          <h5 className="text-sm text-center font-bold md:text-lg">
            Dynamic Leaderboard
          </h5>
          <p className="text-[10px] text-center">
            Track your progress with real-time ranking across different
            categories and time period
          </p>
        </div>
        <div className="flex-col px-6 py-8 justify-around w-64 space-y-4 bg-[#2A364D73] border border-[#465573] rounded-2xl">
          <div className="p-2 size-10 bg-[#4F6184] rounded-2xl mx-auto">
            <Image src={Community} alt="" className="" />
          </div>
          <h5 className="text-sm text-center font-bold md:text-lg">
            Active community
          </h5>
          <p className="text-[10px] text-center">
            Connect with players worldwide,join discussion, and share your chess
            knowledge
          </p>
        </div>
        <div className="flex-col px-6 py-8 justify-around w-64 space-y-4 bg-[#2A364D73] border border-[#465573] rounded-2xl">
          <div className="p-2 size-10 bg-[#4F6184] rounded-2xl mx-auto">
            <Image src={Secure} alt="" className="" />
          </div>
          <h5 className="text-sm text-center font-bold md:text-lg">
            Secure Platform
          </h5>
          <p className="text-[10px] text-center">
            Enterprise-grade security with encrypted data and fair play
            monitoring
          </p>
        </div>
        <div className="flex-col px-6 py-8 justify-around w-64 space-y-4 bg-[#2A364D73] border border-[#465573] rounded-2xl">
          <div className="p-2 size-10 bg-[#4F6184] rounded-2xl mx-auto">
            <Image src={Clock} alt="" className="" />
          </div>
          <h5 className="text-sm text-center font-bold md:text-lg">
            Event scheduling
          </h5>
          <p className="text-[10px] text-center">
            Never miss a tournament club event with our smart notification
            system
          </p>
        </div>
        <div className="flex-col px-6 py-8 justify-around w-64 space-y-4 bg-[#2A364D73] border border-[#465573] rounded-2xl">
          <div className="p-2 size-10 bg-[#4F6184] rounded-2xl mx-auto">
            <Image src={Event} alt="" className="" />
          </div>
          <h5 className="text-sm text-center font-bold md:text-lg">
            Premium Profile
          </h5>
          <p className="text-[10px] text-center">
            Show case your achievements with customizable premium profile and
            statics
          </p>
        </div>
        <div className="flex-col px-6 py-8 justify-around w-64 space-y-4 bg-[#2A364D73] border border-[#465573] rounded-2xl">
          <div className="p-2 size-10 bg-[#4F6184] rounded-2xl mx-auto">
            <Image src={Fast} alt="" className="" />
          </div>
          <h5 className="text-sm text-center font-bold md:text-lg">
            Lichess integration
          </h5>
          <p className="text-[10px] text-center">
            Seamlessly sync with lichess for game import and advanced analytics
          </p>
        </div>
        <div className="flex-col px-6 py-8 justify-around w-64 space-y-4 bg-[#2A364D73] border border-[#465573] rounded-2xl">
          <div className="p-2 size-10 bg-[#4F6184] rounded-2xl mx-auto">
            <Image src={Global} alt="" className="" />
          </div>
          <h5 className="text-sm text-center font-bold md:text-lg">
            Global Reach
          </h5>
          <p className="text-[10px] text-center">
            Join players from around the world in our international chess
            community
          </p>
        </div>
      </div>
    </section>
  );
}
