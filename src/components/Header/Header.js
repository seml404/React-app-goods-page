import React, { useState } from "react";
import { requestData } from "../../services";
import { connect } from "react-redux";
import { setGoodsList } from "../../store/actions";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  const { setGoodsList, listLoaded } = props;
  function handleRequest() {
    requestData(setGoodsList);
  }

  return (
    <>
      <div className="header">
        <div className="header-wrapper">
          {listLoaded ? (
            <button className="btn btn-main" onClick={() => navigate("/")}>
              На главную
            </button>
          ) : (
            <button className="btn btn-main" onClick={handleRequest}>
              Получить перечень товаров
            </button>
          )}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    goodsList: state.goodsList,
    listLoaded: state.listLoaded,
  };
};
const mapDispatchToProps = {
  setGoodsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
