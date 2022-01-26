import React from "react";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import ItemsLoaded from "../ItemsLoaded/ItemsLoaded";
import NavMenu from "../NavMenu/NavMenu";
import ItemsGroup from "../ItemsGroup/ItemsGroup";

const App = () => {
  return (
    <>
      <NavMenu></NavMenu>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" exact element={<ItemsLoaded />}></Route>
          <Route path="/category/:itemsId" element={<ItemsGroup />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
