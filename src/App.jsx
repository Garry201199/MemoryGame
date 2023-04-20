import { useEffect, useRef, useState } from "react";
import pattern1 from "./Assets/magicpattern-blob-1681926367090.png";
import Cards from "./Comp/Cards";
import Confetti from "react-dom-confetti";
import cheer from "./Assets/cheers.mp3";
function App() {
  const cheerRef = useRef();
  const [pairsFound, setPairsFound] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  useEffect(() => {
    if (pairsFound == 6) {
      cheerRef.current.play();
    }
  }, [pairsFound]);
  return (
    <div
      className={`  font-raleway bg-[url('./Assets/GameBg.jpg')] bg-cover bg-center bg-no-repeat mix-blend-multiply relative overflow-hidden h-[100vh] w-full flex flex-col justify-center items-center   text-slate-100`}
    >
      
      <Confetti active={pairsFound == 6} config={config} />
      <h1 className="md:text-2xl z-[1]  my-5 text-xl text-center headFont p-2 rounded-2xl border border-white/60 bg-red-600/30 ">Garry's Memory Game</h1>
      <div className="py-2 z-[1]  px-6 bg-slate-900/80 rounded-xl mb-4 ">
        <h1 className=" tracking-wide  font-semibold md:tracking-[5px]  font-pop md:text-3xl text-xl ">
          pairs matched : {pairsFound}
        </h1>
        <h1 className="text-base ">Attempts Done : {Math.floor(totalAttempts/2)}</h1>
      </div>
      <Cards setPairsFound={setPairsFound} setTotalAttempts={setTotalAttempts} />

      <img
        src={pattern1}
        className="absolute object-cover left-4 top-32 h-[100px] w-[100px] md:h-[400px] md:w-[400px]  z-[0]"
        alt="blob"
      />
      <audio ref={cheerRef}>
        <source src={cheer}></source>
      </audio>
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
