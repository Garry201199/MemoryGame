import React, { useContext, useEffect } from "react";
import { logoSrc } from "../Utils/data";
import CardContext from "../Context/CardContext";
import { reducerActions } from "../Context/CardReducer";
import GameSettingsContext from "../Context/GameSettingsContext";
import { GameSettingsReducerActions } from "../Context/GameSettingsReducer";

const Cards = () => {
  const {
    state: { imgArray, firstCard, clickedCard, preventClick },
    dispatch,
    shuffledArrayGen
  } = useContext(CardContext);
  const { GameSettingsdispatch } = useContext(GameSettingsContext)
   
  const handleClick = (e, i) => {
    // setTotalAttempts((total) => (total += 1));
    GameSettingsdispatch({type: GameSettingsReducerActions.SetTotalAttempts})
    if (preventClick || e.className.includes("flip")) {
      return;
    }
    e.className = e.className + " flip";

    if (!clickedCard) {
      dispatch({ type: reducerActions.SetFirstCard, firstCard: e }),
      dispatch({ type: reducerActions.setClickedCard, clickedCard: i });
      // setCardInfo({ ...cardInfo, firstCard: e, clickedCard: i });
    } else {
      console.log(clickedCard.num , i.num);
      clickedCard.num != i.num
        ? ( 
          dispatch({
            type: reducerActions.setPreventClick,
            preventClick: true,
          }),
          // setCardInfo({ ...cardInfo, preventClick: true }),
          setTimeout(() => {
            firstCard.className = firstCard.className
              .replace("flip", "")
              .trim(); //remove 1st cn
            e.className = e.className.replace("flip", "").trim(); //remove 2nd cn
            dispatch({ type: reducerActions.SetFirstCard, firstCard: null }),
            dispatch({
                type: reducerActions.setClickedCard,
                clickedCard: null,
              }),
            dispatch({
                type: reducerActions.setPreventClick,
                preventClick: false,
              });
            // setCardInfo({
            //   ...cardInfo,
            //   firstCard: null,
            //   clickedCard: null,
            //   preventClick: false,
            // });
          }, 1000))
        : (
          GameSettingsdispatch({type :  GameSettingsReducerActions.SetPairsFound  }),
          // setPairsFound((pairsFound) => (pairsFound += 1)),
          dispatch({ type: reducerActions.SetFirstCard, firstCard: null }),
          dispatch({ type: reducerActions.setClickedCard, clickedCard: null }));
      // setCardInfo({ ...cardInfo, firstCard: null, clickedCard: null })
    }
  };
  useEffect(() => {
    shuffledArrayGen(logoSrc);
  }, []);
  return (
    <div className=" backdrop-blur-sm z-[1] md:min-w-[700px] place-items-center grid md:grid-cols-4 grid-cols-3 md:gap-3 gap-2 md:p-6 p-3  bg-slate-100/20 rounded-2xl  min-h-fit md:h-[500px] ">
      {imgArray &&
        imgArray.map((i, index) => (
          <div
            key={index}
            onClick={(e) => {
              handleClick(e.currentTarget.firstElementChild, i);
            }}
            className="group md:h-[130px] md:w-[130px]  h-[90px] w-[90px] duration-300  [perspective:1000px]"
          >
            <div
              className={`relative h-full w-full bg-white/80 shadow-xl transition-all duration-500
                       cursor-default [transform-style:preserve-3d] rounded-xl`}
            >
              <div className="p-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
              </div>

              <div className="absolute inset-0 h-full w-full rounded-xl    text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <img
                  src={i.img}
                  className=" h-full w-full  p-2 bg-slate-50 rounded-2xl  object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cards;
