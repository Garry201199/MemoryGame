import React, { useContext } from "react";
import GameSettingsContext from "../Context/GameSettingsContext";
import Confetti from "react-confetti";

const ResultModal = () => {
  const {
    state: { totalAttempts },
  } = useContext(GameSettingsContext);

  return (
    <div
      className={` absolute backdrop-blur-sm z-[999] w-full h-full flex justify-center items-center bg-black/50`}
    >
      <div className=" p-6 rounded-xl border border-slate-800 bg-[#121212]/70 max-w-[500px] flex justify-center items-center flex-col max-h-[380px]">
        <div className="flex px-4 rounded-full border border-[#6f81e4] text-[#112969] py-2 bg-[#eeeff5]/80   ">
          <h1 className="text-base font-semibold">
            Attempts taken : {Math.floor(totalAttempts / 2)}{" "}
          </h1>
        </div>
        <img
          className="w-[200px] h-[200px] object-cover"
          src="https://media.tenor.com/bWUeVRqW9-IAAAAi/fast-cat-cat-excited.gif"
          alt=""
        />
        <h1 className=" headFont text-slate-100 mb-3 font-semibold tracking-tight text-sm md:text-base ">
          Congratulations !!!
        </h1>
        <Confetti width={window.innerWidth} height={window.innerHeight} />
        <button
          onClick={() =>
            setInterval(() => {
              window.location.reload();
            }, 500)
          }
          className="group transition-all duration-300 ease-in rounded-2xl md:h-12 h-8 w-48 bg-sky-600 font-bold text-lg text-white relative overflow-hidden "
        >
          <>
            <p className="text-sm headFont ">Restart</p>
            <div className="absolute duration-300 inset-0 w-full h-full transition-all translate-x-[-100px]  group-hover:translate-x-0  group-hover:bg-white/40   rounded-2xl"></div>
          </>
        </button>
      </div>
    </div>
  );
};

export default ResultModal;


