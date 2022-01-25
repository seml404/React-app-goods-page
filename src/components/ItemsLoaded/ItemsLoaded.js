import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ItemsLoaded(props) {
  const { goodsList } = props;
  let [orderDetails, setOrderDetails] = useState({});

  function handleInputChange(e, itemId) {
    setOrderDetails((prev) => {
      return {
        ...prev,
        [itemId]: e.target.value,
      };
    });
  }

  function renderGoodsList(listOfGoods) {
    return listOfGoods.map((category) => {
      return (
        <>
          <div className="category-container">
            <h2 className="category-title">{category.rname}</h2>

            <div className="category-items">
              {category.goods.map((goodsItem) => {
                return (
                  <>
                    <div className="item-wrapper">
                      <div className="item-id">{goodsItem.gid}</div>
                      <div className="item-id">{goodsItem.gname}</div>
                      <div className="item-price">{goodsItem.gprice}</div>
                      <div>
                        <input
                          className="item-ordered"
                          value={orderDetails[goodsItem.gid]}
                          onChange={(e) => handleInputChange(e, goodsItem.gid)}
                        ></input>
                      </div>
                      <div className="item-ordered-price">
                        {orderDetails[goodsItem.gid]
                          ? orderDetails[goodsItem.gid] * goodsItem.gprice
                          : ""}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </>
      );
    });
  }

  return (
    <>
      {goodsList ? (
        <>{renderGoodsList(goodsList)}</>
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
