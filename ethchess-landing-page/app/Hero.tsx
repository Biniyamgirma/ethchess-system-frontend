export default function Hero() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      <div className="hero-section absolute inset-0 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-linear-to-r from-[#392561] to-[#754CC7] opacity-90 backdrop-blur-2xl"></div>
      <div className="absolute z-10 h-screen w-screen  grid grid-cols-1 items-stretch justify-center  md:mx-4">
        <div className="flex w-screen items-center justify-center">
          <div className="flex h-8 md:h-6 items-center gap-2 rounded-xl border border-[#FFC610] bg-[#e5be805d] px-2 py-1 text-sm">
            <img
              className="size-3 md:size-4"
              src="https://images.unsplash.com/photo-1765706728716-1469ed439130?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <p className="text-sm md:text-md text-nowrap text-[#FFC942]">
              Premium Chess Club Experience
            </p>
          </div>
        </div>
        <div className="mx-auto  ">
          <h1 className="text-7xl text-wrap text-white md:text-center">
            Master Chess With <br />
            <span>
              <strong className="bg-linear-to-r text-5xl from-yellow-400 via-orange-300 to-orange-400 bg-clip-text  font-extrabold tracking-wide text-transparent ">
                ETHCHESS CLUB
              </strong>
            </span>
          </h1>
          <p className="mx-auto mt-6 py-4 text-2xl md:text-sm md:py-2 text-white w-10/12 text-center">
            Join Our elite chess community. Compete in tournaments,climb
            leaderboards,and connect with chess enthusiasts from around the
            world
          </p>
        </div>
        <div className="w-10/12 md:w-1/3  md:flex items-center md:space-x-4 justify-center mx-auto">
          <button className="flex w-full text-black cursor-pointer items-center justify-center rounded-lg bg-[#E9B308] py-2 hover:bg-[#e9b508b5]">
            Join Club Now <span className="pl-4 font-bold">T</span>
          </button>
          <button className="mt-2 md:mt-0 w-full text-black cursor-pointer rounded-lg bg-[#ffff] py-2 hover:bg-[#ffff]">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
