import React, { useState } from "react";
import { Link } from "react-router-dom";
import { requestData } from "../../services";
import { connect } from "react-redux";
import { setGoodsList } from "../../store/actions";

function Header(props) {
  const { goodsList, setGoodsList } = props;
  function handleRequest() {
    requestData(setGoodsList);
  }

  return (
    <>
      <div className="header">
        <div className="header-wrapper">
          <button className="btn-main" onClick={handleRequest}>
            Get goods list
          </button>
          <button onClick={() => console.log(goodsList)}>
            SHOW goods list
          </button>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    goodsList: state.goodsList,
  };
};

const mapDispatchToProps = {
  setGoodsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
