export const initialState = {
  imgArray: [],
  firstCard: null,
  clickedCard: null,
  preventClick: false,
};
export const reducerActions = {
    SetFirstCard : 'SetFirstCard',
    setClickedCard:'setClickedCard',
    setPreventClick:'setPreventClick',
    setImgArray:'setImgArray'
}
export const CardReducer = (state, action) => {
  switch (action.type) {
    case reducerActions.SetFirstCard:
      return { ...state, firstCard: action.firstCard };
    case reducerActions.setClickedCard:
      return { ...state, clickedCard: action.clickedCard };
    case reducerActions.setPreventClick:
        return { ...state , preventClick: action.preventClick };
    case reducerActions.setImgArray:
        return { ...state, imgArray: action.imgArray };       
    default:
      break;
  }
};
