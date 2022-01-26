import React from "react";

export default function GoodsCategory(props) {
  const { categoryName } = props;

  return (
    <div
      className="category-container"
      key={categoryName + "category-container"}
    >
      <h2 className="category-title" key={categoryName + "category-title"}>
        {categoryName}
      </h2>
      <div className="category-items" key={categoryName + "category-items"}>
        <div className="section-names">
          <div>id</div>
          <div>Наименование</div>
          <div>Цена</div>
          <div>Количество в корзине</div>
          <div>Общая стоимость</div>
        </div>
        {props.children}
      </div>
    </div>
  );
}
