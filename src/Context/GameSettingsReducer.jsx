export const GameSettingsInitialState = {
  pairsFound: 0,
  totalAttempts: 0,
  gameInitiated: false,
  modalRemoved: false,
};

export const GameSettingsReducerActions = {
  SetPairsFound: "SetPairsFound",
  SetTotalAttempts: "totalAttempts",
  SetModalRemoved: "modalRemoved",
  SetGameInitiated: "gameInitiated",
};

const GameSettingsReducer = (state, action) => {
  switch (action.type) {
    case GameSettingsReducerActions.SetPairsFound:
      return { ...state, pairsFound: state.pairsFound + 1 };
    case GameSettingsReducerActions.SetTotalAttempts:
      return { ...state, totalAttempts: state.totalAttempts + 1 };
    case GameSettingsReducerActions.SetModalRemoved:
      return { ...state, modalRemoved: action.modalRemoved };
    case GameSettingsReducerActions.SetGameInitiated:
      return { ...state, gameInitiated: action.gameInitiated };
    default:
      break;
  }
};

export default GameSettingsReducer
