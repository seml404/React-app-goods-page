import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import GoodsCategory from "../GoodsCategory/GoodsCategory";
import GoodsItem from "../GoodsItem/GoodsItem";
import TotalSum from "../TotalSum/TotalSum";
import { countTotalCost } from "../../services";

function ItemsLoaded(props) {
  const { goodsList } = props;
  let [readyToRender, setReadyToRender] = useState(false);
  let [orderDetails, setOrderDetails] = useState({});
  let [totalCost, setTotalCost] = useState(0);

  function handleInputChange(e, itemId) {
    setTotalCost(0);
    setOrderDetails((prev) => {
      return {
        ...prev,
        [itemId]: {
          ...prev[itemId],
          itemsOrdered: e.target.value,
          totalCost: e.target.value * prev[itemId].itemPrice,
        },
      };
    });
  }

  useEffect(() => {
    setTotalCost(() => {
      return countTotalCost(orderDetails);
    });
  }, [orderDetails]);

  useEffect(() => {
    setReadyToRender(false);
    if (goodsList.length > 0) {
      goodsList.forEach((category) => {
        category.goods.forEach((item) => {
          setOrderDetails((prev) => {
            return {
              ...prev,
              [item.gid]: {
                itemPrice: item.gprice,
                itemsOrdered: "",
                totalCost: "",
              },
            };
          });
        });
      });
      setReadyToRender(true);
    }
  }, [goodsList]);

  function renderGoodsList(listOfGoods) {
    return listOfGoods.map((category) => {
      return (
        <GoodsCategory
          categoryName={category.rname}
          key={category.rname + Math.random()}
        >
          {category.goods.map((goodsItem) => {
            return (
              <GoodsItem
                key={goodsItem.gid + Math.random()}
                itemId={goodsItem.gid}
                itemName={goodsItem.gname}
                itemPrice={goodsItem.gprice}
                itemValue={orderDetails[goodsItem.gid].itemsOrdered}
                handleValueChange={handleInputChange}
                totalCost={orderDetails[goodsItem.gid].totalCost}
              ></GoodsItem>
            );
          })}
        </GoodsCategory>
      );
    });
  }

  return (
    <>
      {readyToRender ? (
        <>
          {renderGoodsList(goodsList)}
          <TotalSum
            goodsCounted={goodsList}
            totalCost={totalCost}
            orderDetails={orderDetails}
          ></TotalSum>
        </>
      ) : (
        <>
          <div>no data</div>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    goodsList: state.goodsList,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsLoaded);
