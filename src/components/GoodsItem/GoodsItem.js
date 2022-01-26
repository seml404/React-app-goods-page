import React from "react";

export default function GoodsItem(props) {
  const {
    itemId,
    itemName,
    itemPrice,
    itemValue,
    handleValueChange,
    totalCost,
  } = props;

  return (
    <div className="item-wrapper">
      <div className="item-id">{itemId}</div>
      <div className="item-name">{itemName}</div>
      <div className="item-price">{itemPrice}</div>
      <div className="item-input-wrapper">
        <input
          type="number"
          className="item-ordered"
          value={itemValue}
          onChange={(e) => handleValueChange(e, itemId)}
        ></input>
      </div>
      <div className="item-ordered-price">{totalCost ? totalCost : ""}</div>
    </div>
  );
}
