import { useContext, useEffect, useRef } from "react";
import cheer from "./Assets/happy.mp3";
import Cards from "./Comp/Cards";
import ResultModal from "./Comp/ResultModal";
import StartModal from "./Comp/StartModal";
import { CardContextProvider } from "./Context/CardContext";
import GameSettingsContext from "./Context/GameSettingsContext";
import { GameSettingsReducerActions } from "./Context/GameSettingsReducer";

function App() {
  const cheerRef = useRef();

  const {
    state: { pairsFound, totalAttempts,  modalRemoved },
    GameSettingsdispatch,
  } = useContext(GameSettingsContext);


  const handleStartGame = () => {
    GameSettingsdispatch({
      type: GameSettingsReducerActions.SetGameInitiated,
      gameInitiated: true,
    });
    // setGameInitiated(true);
    setTimeout(() => {
      GameSettingsdispatch({
        type: GameSettingsReducerActions.SetGameInitiated,
        gameInitiated: false,
      });
      GameSettingsdispatch({
        type: GameSettingsReducerActions.SetModalRemoved,
        modalRemoved: true,
      });
    }, 1500);
  };

  useEffect(() => {
    if (pairsFound == 6) {
      cheerRef.current.play();
    }
  }, [pairsFound]);
  return (
    <div
      className={`  font-raleway bg-[url('./Assets/GameBg-min.jpg')] bg-cover bg-center bg-no-repeat mix-blend-multiply relative overflow-hidden h-[100vh] w-full flex flex-col justify-center items-center   text-slate-100`}
    >
      {!modalRemoved && (
        <StartModal handleStartGame={handleStartGame}  />
      )}

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

      <CardContextProvider>
        <Cards/>
      </CardContextProvider>

      <audio ref={cheerRef}>
        <source src={cheer}></source>
      </audio>

      {pairsFound == 1 && (
       <ResultModal />
      )}
    </div>
  );
}

export default App;


