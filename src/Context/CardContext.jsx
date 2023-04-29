import { createContext,useCallback, useReducer } from "react";
import { logoSrc } from "../Utils/data";
import { CardReducer, initialState, reducerActions } from "./CardReducer";

const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
  const [state , dispatch ] = useReducer(CardReducer ,initialState );

  const shuffledArrayGen = useCallback(
    (logoSrc) => {
      const shuffledArray = [
        ...logoSrc.sort((a, b) => 0.5 - Math.random()),
        ...logoSrc.sort((a, b) => 0.5 - Math.random()),
      ]; // const resultArray =[] // for (let i = 0; i < shuffledArray.length  ; i++) { //     resultArray.push({id: randomId + i , imgSrc:shuffledArray[i].img   }) // }
      dispatch({type : reducerActions.setImgArray , imgArray : shuffledArray })
    //   setCardInfo({...cardInfo , imgArray: shuffledArray });
    },
    [logoSrc]
  );


  return (
    <CardContext.Provider value={{ state , dispatch, shuffledArrayGen  }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContext;
