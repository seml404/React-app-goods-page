const setGoodsList = (goodsList) => {
  return {
    type: "SET_GOODS_LIST",
    goodsList: goodsList,
  };
};

const toggleMenu = () => {
  return {
    type: "TOGGLE_MENU",
  };
};

export { setGoodsList, toggleMenu };
