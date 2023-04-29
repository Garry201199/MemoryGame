import React, { createContext, useReducer } from "react";
import GameSettingsReducer, {
  GameSettingsInitialState,
} from "./GameSettingsReducer";

const GameSettingsContext = createContext();

export const GameSettingsContextprovider = ({ children }) => {
  const [state, dispatch] = useReducer(
    GameSettingsReducer,
    GameSettingsInitialState
  );

  return (
    <GameSettingsContext.Provider
      value={{ state, GameSettingsdispatch: dispatch }}
    >
      {children}
    </GameSettingsContext.Provider>
  );
};

export default GameSettingsContext;
