import React from "react";

import { sendData } from "../../services";

export default function TotalSum(props) {
  const { totalCost, orderDetails } = props;

  console.log(props);

  return (
    <>
      <div className="total-wrapper">
        <button
          className="btn"
          onClick={() => {
            sendData(orderDetails);
          }}
        >
          В корзину
        </button>
        <p className="total-price">{totalCost}</p>
      </div>
    </>
  );
}
