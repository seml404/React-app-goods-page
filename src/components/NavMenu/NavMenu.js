import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { toggleMenu } from "../../store/actions";

function NavMenu(props) {
  const navigate = useNavigate();
  const { goodsList, toggleMenu, showMenu } = props;
  let [linkList, setLinkList] = useState();

  useEffect(() => {
    let arr = goodsList.map((item) => {
      return { name: item.rname, categoryId: item.rid };
    });
    setLinkList(arr);
  }, [props]);

  function handleMenuItemClick(id) {
    console.log("id", id);
    navigate(`/category/${id}`);
    toggleMenu();
  }

  return (
    <>
      <div className="nav-menu-wrapper">
        <h2 onClick={() => toggleMenu()} className="nav-menu-title">
          Меню
        </h2>
        {showMenu && (
          <div className="nav-menu-items">
            {linkList
              ? linkList.map((item) => {
                  return (
                    <div
                      className="nav-menu-item"
                      key={item.categoryId + Math.random()}
                      onClick={() => handleMenuItemClick(item.categoryId)}
                    >
                      {item.name}
                    </div>
                  );
                })
              : null}
          </div>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    goodsList: state.goodsList,
    showMenu: state.showMenu,
  };
};

const mapDispatchToProps = {
  toggleMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
