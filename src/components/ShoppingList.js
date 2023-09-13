import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState(items)

  function filter(e){
    const array = items.filter((item)=> {
      if (item.category === e.target.value) {
        return item
      } else if (e.target.value === "All" ) {
        return items
      }
    })
    setSelectedCategory(array)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
