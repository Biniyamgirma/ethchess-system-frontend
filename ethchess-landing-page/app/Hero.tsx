import Image from "next/image";
import LocalImage from "../public/image/icon.png";
import Logo from "../public/image/ethchess.png";

export default function Hero() {
  return (
    <section className="relative h-screen w-screen overflow-hidden font-inter">
      <div className="hero-section absolute inset-0 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-linear-to-r from-[#392561] to-[#754CC7] opacity-90 backdrop-blur-2xl"></div>
      <div className="absolute z-10 h-screen w-screen  grid grid-cols-1 items-stretch justify-center  md:mx-4">
        <div className="flex w-screen items-center justify-center ">
          <div className="flex h-8 md:h-6 items-center gap-0.5 rounded-xl  bg-[#ffc71029] px-2 py-4 text-sm">
            <Image
              src={Logo}
              alt="ethchess logo"
              className="size-[20px] md:size-6"
            />
            <p className="font-medium text-sm md:text-md text-nowrap text-[#FFC942]">
              Premium Chess Club Experience
            </p>
          </div>
        </div>
        <div className="mx-auto  w-10/12">
          <h1 className="text-5xl font-extrabold md:text-6xl  text-white md:text-center">
            Master Chess With <br />
            <span className="font-extrabold bg-linear-to-r md:text-6xl from-yellow-400 via-orange-300 to-orange-400 bg-clip-text tracking-wide text-transparent">
              ETHCHESS CLUB
            </span>
          </h1>
          <p className="font-normal mx-auto md:w-[640px]  mask-radial-from-neutral-300 mt-6 py-4 text-md md:text-md md:py-2  text-white  md:text-center">
            Join Our elite chess community. Compete in tournaments,climb
            leaderboards,and connect with chess enthusiasts from around the
            world
          </p>
        </div>
        <div className="w-10/12 md:w-1/3  md:flex items-center md:space-x-4 justify-center mx-auto">
          <button className="font-medium flex w-full text-black cursor-pointer items-center justify-center rounded-lg bg-[#E9B308] py-2 hover:bg-[#e9b508b5]">
            Join Club Now{" "}
            <span className="pl-4 font-bold">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 7L15 12L10 17"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <button className="font-medium mt-2 md:mt-0 w-full text-black cursor-pointer rounded-lg bg-[#ffff] py-2 hover:bg-[#ffff]">
            Contact Us
          </button>
        </div>
        <div className="hidden md:flex mx-auto justify-around items-center w-11/12">
          <div className=" ">
            <div className="max-w-8 flex">
              <Image src={LocalImage} alt="icon image" placeholder="blur" />
              <h3 className="text-2xl ">1,250+</h3>
            </div>
            <p className="text-sm text-[#C5C5C5]">Active Members</p>
          </div>
          <div className=" ">
            <div className="max-w-8 flex">
              <Image src={LocalImage} alt="icon image" placeholder="blur" />
              <h3 className="text-2xl ">1,250+</h3>
            </div>
            <p className="text-sm text-[#C5C5C5]">Active Members</p>
          </div>
          <div className=" ">
            <div className="max-w-8 flex">
              <Image src={LocalImage} alt="icon image" placeholder="blur" />
              <h3 className="text-2xl ">1,250+</h3>
            </div>
            <p className="text-sm text-[#C5C5C5]">Active Members</p>
          </div>
        </div>
      </div>
    </section>
  );
}
