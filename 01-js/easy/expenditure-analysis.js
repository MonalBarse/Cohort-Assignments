/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  let obj = {};
  for (let i = 0; i < transactions.length; i++) {
      let category = transactions[i].category;

      if (obj[category] == undefined) {
          obj[category] = transactions[i].price;
      } else {
          obj[category] += transactions[i].price;
      }
      console.log(obj);
  }
  for (let key in obj) {
    let temp = {
      category: key,
      totalSpent: obj[key]
    };

      result.push(temp);
  }
  return result;
}


/* 

let transactions =  [ 
    { itemName: "Item1", category: "Groceries", price: 20, timestamp: 1636729200000 },
    { itemName: "Item2", category: "Electronics", price: 50, timestamp: 1636829200000 },
    { itemName: "Item3", category: "Groceries", price: 30, timestamp: 1636929200000 },
    { itemName: "Item4", category: "Electronics", price: 70, timestamp: 1637029200000 },
    { itemName: "Item5", category: "Electronics", price: 170, timestamp: 1637029200000 },
    { itemName: "Item6", category: "Dairy", price: 35, timestamp: 1637029200000 },
    { itemName: "Item7", category: "Misc", price: 270, timestamp: 1637029200000 },

];
console.log(calculateTotalSpentByCategory(transactions)); 

*/

module.exports = calculateTotalSpentByCategory;
