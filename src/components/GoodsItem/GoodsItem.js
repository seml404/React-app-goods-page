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
    <div className="item-wrapper" key={itemId + "item-wrapper"}>
      <div className="item-id" key={itemId + "item-id"}>
        {itemId}
      </div>
      <div className="item-name" key={itemId + "item-name"}>
        {itemName}
      </div>
      <div className="item-price" key={itemId + "item-price"}>
        {itemPrice}
      </div>
      <div className="item-input-wrapper" key={itemId + "item-input-wrapper"}>
        <input
          key={itemId + "item-ordered"}
          type="number"
          className="item-ordered"
          value={itemValue}
          onChange={(e) => handleValueChange(e, itemId)}
        ></input>
      </div>
      <div className="item-ordered-price" key={itemId + "item-ordered-price"}>
        {totalCost ? totalCost : ""}
      </div>
    </div>
  );
}
