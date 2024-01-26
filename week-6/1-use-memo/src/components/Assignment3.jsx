import React, { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "Chocolates", value: 20 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 20 },
    { name: "Tomato", value: 20 },
    // Add more items as needed
  ]);

  // Your code starts here
  /*  const totalValue = useMemo(()=>{
        let result = 0;

        for (let i = 0; i < items.length; i++) {
            const element = items[i].value;
            result += element;
        }
        return result;

    },[items]); */

  const totalValue = useMemo(() => {
    let result = 0;
    items.map((val) => (result += val.value));
    return result;
  },[items]);
  // Your code ends here
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <p>Total Value: ${totalValue}</p>
    </div>
  );
};
