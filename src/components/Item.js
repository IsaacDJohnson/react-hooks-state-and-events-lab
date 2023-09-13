import React, { useState } from "react";

function Item({ name, category }) {

  const [itemStatus, setItemStatus] = useState("")

  function setter(){
    setItemStatus(itemStatus ? "" : "in-cart")
  }
  const buttonStatus = itemStatus ? "Remove From Cart" : "Add to Cart"

  return (
    <li className={itemStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={setter}>{buttonStatus}</button>
    </li>
  );
}

export default Item;
