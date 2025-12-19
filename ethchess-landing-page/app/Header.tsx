import React from "react";

function Header() {
  return (
    <>
      <div className="hidden md:flex-col bg-linear-to-r from-[#421B6C66] to-[#1617361A] p-0.5">
        <nav className="flex justify-between bg-linear-30 from-[#161736] to-[#421b6c] p-4 backdrop-blur-lg">
          <div className="flex max-w-1/4 justify-around gap-2 text-center">
            <div className="size-6 text-white">I</div>
            <div className="size-6 text-white">I</div>
            <div className="size-6 text-white">I</div>
            <div className="size-6 text-white">I</div>
            <div className="size-6 text-white">I</div>
          </div>
          <div className="h-auto w-150">
            <div className="flex items-center justify-center text-2xl text-white">
              ETH{" "}
              <img
                className="mx-2 size-8 rounded-full"
                src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
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
          <div className="h-11/12 max-w-1/4 flex-col items-center">
            <div className="flex h-fit w-full items-center justify-around gap-2 text-white">
              <div className="size-6">I</div>
              <div className="size-6 text-white">I</div>
              <div className="size-6 text-white">I</div>
            </div>
            <div>
              <button className="mt-6 rounded-lg border border-white px-4 py-2 text-nowrap text-white hover:cursor-pointer hover:bg-white/30">
                Join us
              </button>
            </div>
          </div>
        </nav>
      </div>
      {/* // nav bar for header */}
      <div className="max-w-screen overflow-hidden">
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
