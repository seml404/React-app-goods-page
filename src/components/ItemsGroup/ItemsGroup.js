import React, { useEffect, useState } from "react";
import GoodsCategory from "../GoodsCategory/GoodsCategory";
import GoodsItem from "../GoodsItem/GoodsItem";
import { useParams } from "react-router";
import { connect } from "react-redux";
import TotalSum from "../TotalSum/TotalSum";
import { countTotalCost } from "../../services";

function ItemsGroup(props) {
  const { goodsList } = props;
  const { itemsId } = useParams();

  let [readyToRender, setReadyToRender] = useState(false);
  let [orderDetails, setOrderDetails] = useState({});
  let [categoryItem, setCategoryItem] = useState();
  let [totalCostGroup, setTotalCostGroup] = useState(0);

  function handleInputChange(e, itemId) {
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
    setOrderDetails({});
    setReadyToRender(false);
    let filtered = goodsList.filter((item) => {
      return item.rid === `${itemsId}`;
    });
    setCategoryItem({ ...filtered[0] });
    if (filtered[0]) {
      filtered[0].goods.forEach((item) => {
        setOrderDetails((prev) => {
          return {
            ...prev,
            [item.gid]: {
              itemPrice: item.gprice,
              itemsOrdered: 0,
              totalCost: "",
            },
          };
        });
      });
    }
    setReadyToRender(true);
  }, [itemsId]);

  useEffect(() => {
    setTotalCostGroup(() => {
      return countTotalCost(orderDetails);
    });
  }, [itemsId, orderDetails]);

  return (
    <>
      {readyToRender ? (
        <>
          <GoodsCategory
            categoryName={categoryItem.rname}
            key={categoryItem.rname}
          >
            {categoryItem.goods.map((goodsItem) => {
              return (
                <GoodsItem
                  key={goodsItem.gid}
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
          <TotalSum
            goodsCounted={categoryItem.goods}
            totalCost={totalCostGroup}
            orderDetails={orderDetails}
          ></TotalSum>
        </>
      ) : (
        <h2>no data</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemsGroup);
