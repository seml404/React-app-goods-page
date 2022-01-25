const initialState = {
  goodsList: [],
  loading: false,
  userFilter: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GOODS_LIST":
      console.log(action.goodsList);
      console.log("requested");
      return {
        ...state,
        goodsList: [...action.goodsList],
      };
    default:
      return state;
  }
};

export default reducer;
