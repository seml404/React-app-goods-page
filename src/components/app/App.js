import React from "react";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import ItemsLoaded from "../ItemsLoaded/ItemsLoaded";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <ItemsLoaded></ItemsLoaded>
      <Routes>
        {/* <Route path="/" element={<BooksFound />}></Route>        */}
      </Routes>
    </div>
  );
};

export default App;
