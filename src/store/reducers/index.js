const initialState = {
  goodsList: [],
  loading: false,
  userFilter: "",
  showMenu: false,
  listLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GOODS_LIST":
      return {
        ...state,
        listLoaded: true,
        goodsList: [...action.goodsList],
      };
    case "TOGGLE_MENU":
      return {
        ...state,
        showMenu: !state.showMenu,
      };
    default:
      return state;
  }
};

export default reducer;
