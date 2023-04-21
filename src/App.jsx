import { useEffect, useRef, useState } from "react";
import Cards from "./Comp/Cards";
import Confetti from "react-dom-confetti";
import cheer from "./Assets/cheers.mp3";
function App() {
  const cheerRef = useRef();
  const [pairsFound, setPairsFound] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [gameInitiated, setGameInitiated] = useState(false);
  const [modalRemoved, setModalRemoved] = useState(false);
  const handleStartGame = () => {
    setGameInitiated(true);
    setTimeout(() => {
      setGameInitiated(false);
      setModalRemoved(true);
    }, 1500);
  };

  useEffect(() => {
    if (pairsFound == 6) {
      cheerRef.current.play();
    }
  }, [pairsFound]);
  return (
    <div
      className={`  font-raleway bg-[url('./Assets/GameBg.jpg')] bg-cover bg-center bg-no-repeat mix-blend-multiply relative overflow-hidden h-[100vh] w-full flex flex-col justify-center items-center   text-slate-100`}
    >
      {!modalRemoved && (
        <div
          className={`component-b  ${
            modalRemoved ? "hide" : "show"
          }  absolute backdrop-blur-sm z-[999] w-full h-full flex justify-center items-center bg-black/50`}
        >
          <div className=" p-6 rounded-xl border border-slate-800 bg-[#121212]/70 max-w-[500px] flex justify-center items-center flex-col max-h-[380px]">
            {gameInitiated ? (
              <img
                className="w-[200px] rounded-md h-[200px] object-contain mb-3 "
                src="https://media.tenor.com/7XjXuQwRPsoAAAAj/doge.gif"
                alt="cheemsstart"
              />
            ) : (
              <img
                className="w-[200px] rounded-md h-[200px] object-cover mb-3 "
                src="https://media.tenor.com/FawYo00tBekAAAAd/loading-thinking.gif"
                alt="cheemsWait"
              />
            )}
            <h1 className=" headFont text-slate-100 mb-3 font-semibold tracking-tight text-sm md:text-base ">
              Ready to play the game?{" "}
            </h1>
            <button
              onClick={() => handleStartGame()}
              class="group transition-all duration-300 ease-in rounded-2xl md:h-12 h-8 w-48 bg-green-600 font-bold text-lg text-white relative overflow-hidden "
            >
              {gameInitiated && gameInitiated ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              ) : (
                <>
                  <p className=" text-sm md:text-base headFont ">Start</p>
                  <div class="absolute duration-300 inset-0 w-full h-full transition-all translate-x-[-100px]  group-hover:translate-x-0  group-hover:bg-white/40   rounded-2xl"></div>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      <Confetti active={pairsFound == 6} config={config} />
      <h1 className="md:text-2xl z-[1]  my-5 text-xl text-center headFont p-2 rounded-2xl border border-white/60 bg-red-600/30 ">
        Garry's Memory Game
      </h1>
      <div className="py-2 z-[1]  px-6 bg-slate-900/80 rounded-xl mb-4 ">
        <h1 className=" tracking-wide  font-semibold md:tracking-[5px]  font-pop md:text-3xl text-xl ">
          pairs matched : {pairsFound}
        </h1>
        <h1 className="text-base ">
          Attempts Done : {Math.floor(totalAttempts / 2)}
        </h1>
      </div>
      <Cards
        setPairsFound={setPairsFound}
        setTotalAttempts={setTotalAttempts}
      />

      {/* <img
        src={pattern1}
        className="absolute object-cover left-4 top-32 h-[100px] w-[100px] md:h-[400px] md:w-[400px]  z-[0]"
        alt="blob"
      /> */}
      <audio ref={cheerRef}>
        <source src={cheer}></source>
      </audio>
      {pairsFound == 6  && (
        <div
        className={` absolute backdrop-blur-sm z-[999] w-full h-full flex justify-center items-center bg-black/50`}
      >
        <div className=" p-6 rounded-xl border border-slate-800 bg-[#121212]/70 max-w-[500px] flex justify-center items-center flex-col max-h-[380px]">
          <img className="w-[180px] h-[200px] " src="https://media.tenor.com/nrJ0FfU9WQ0AAAAi/funny.gif" alt="" />
          <h1 className=" headFont text-slate-100 mb-3 font-semibold tracking-tight text-sm md:text-base ">
            Congratulations !!!
          </h1>
          <button
            onClick={() => window.location.reload()}
            class="group transition-all duration-300 ease-in rounded-2xl md:h-12 h-8 w-48 bg-sky-600 font-bold text-lg text-white relative overflow-hidden "
          ><>
                <p className="text-sm headFont ">Restart</p>
                <div class="absolute duration-300 inset-0 w-full h-full transition-all translate-x-[-100px]  group-hover:translate-x-0  group-hover:bg-white/40   rounded-2xl"></div>
              </>
   
          </button>
        </div>
      </div>
      )}

    </div>
  );
}

export default App;

const config = {
  angle: 180,
  spread: 500,
  startVelocity: 20,
  elementCount: 300,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  // perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};
