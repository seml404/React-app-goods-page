const setGoodsList = (goodsList) => {
  return {
    type: "SET_GOODS_LIST",
    goodsList: goodsList,
  };
};

const testFunc = (info) => {
  return {
    type: "TEST",
    info,
  };
};

export { setGoodsList, testFunc };
