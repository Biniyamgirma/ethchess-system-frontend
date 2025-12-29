import React from "react";

function Footer() {
  return (
    <footer className="text-white bg-[#141731] ">
      <div className="flex justify-between px-12 py-8">
        <div className="space-y-8 w-1/3">
          <div className="flex h-12 w-fit items-center  justify-center space-x-2 text-2xl">
            ETH
            <img
              className="size-8"
              src="https://plus.unsplash.com/premium_vector-1689096818551-edb79a6fa3da?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />{" "}
            CHESS
          </div>
          <div className="  ">
            <p className=" text-lg">
              Connecting chess players, tournaments, and community across
              Ethiopia, one move at a time.
            </p>
          </div>
          <div className="flex-col space-y-4">
            <div className="flex size-6 space-x-2">
              <img
                src="https://plus.unsplash.com/premium_vector-1689096818551-edb79a6fa3da?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <p>Support@ethchess.com</p>
            </div>
            <div className="flex size-6 space-x-2">
              <img
                src="https://plus.unsplash.com/premium_vector-1689096818551-edb79a6fa3da?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <p>+252972788430</p>
            </div>
            <div className="flex size-6 space-x-2">
              <img
                src="https://plus.unsplash.com/premium_vector-1689096818551-edb79a6fa3da?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <p>Ethiopia</p>
            </div>
          </div>
          <div className="flex size-8 space-x-6 ">
            <img
              src="https://plus.unsplash.com/premium_vector-1683141234968-b4f861c0546a?q=80&w=666&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              src="https://plus.unsplash.com/premium_vector-1683141234968-b4f861c0546a?q=80&w=666&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              src="https://plus.unsplash.com/premium_vector-1683141234968-b4f861c0546a?q=80&w=666&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              src="https://plus.unsplash.com/premium_vector-1683141234968-b4f861c0546a?q=80&w=666&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              src="https://plus.unsplash.com/premium_vector-1683141234968-b4f861c0546a?q=80&w=666&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="flex pl-4 space-x-16">
          <ul className="space-y-2 text-sm">
            <li className="font-bold text-xl pb-2">Chess Community</li>
            <li>Leader-board</li>
            <li>Upcoming Tournaments</li>
            <li>Blog / Brilliant Moves</li>
            <li>Lichess Club Link</li>
          </ul>
          <ul className="space-y-2 text-sm">
            <li className="font-bold text-xl pb-2">Chess Community</li>
            <li>Leader-board</li>
            <li>Upcoming Tournaments</li>
            <li>Blog / Brilliant Moves</li>
            <li>Lichess Club Link</li>
          </ul>
          <ul className="space-y-2 text-sm">
            <li className="font-bold text-xl pb-2 ">Chess Community</li>
            <li>Leader-board</li>
            <li>Upcoming Tournaments</li>
            <li>Blog / Brilliant Moves</li>
            <li>Lichess Club Link</li>
          </ul>
        </div>
      </div>
      <div className="h-8 mt-16 w-screen rounded-t-3xl bg-[#FFC610] text-center text-[#141731]">
        copy 2025
      </div>
    </footer>
  );
}

export default Footer;
