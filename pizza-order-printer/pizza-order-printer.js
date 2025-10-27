/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */
import fs from "fs/promises"; //gives us tools for reading and writing files

//Get first user input and save in a variable declared as 'orders'
let orders = process.argv[2];

//Get second user input and save # in a variable declared as order_num;
let order_num = process.argv[3];

//Read pizza data from the data.json file, and get the pizza for the user-inputed month
async function getOrderData() {
  const data = await fs.readFile("./data.json", "utf8"); //one dot(.) means current folder, two dots (..) means parent folder
  //Just like API call, it takes time to get data from another file, so we will use await keyword. Meaning wait to get all data before we move on to the next line of code
  //we make the function as async to use the await keyword We can only use await keyword in a function that is declared as an asynchronous function
  //console.log("data : ", data); //string (JSON string)
  //data is still in json format.
  //convert it to JavaScript : We need to parse the JSON object into JavaScript
  //Declare a variable named parsedData and store the parsed data in it converted using the JSON.parse method
  const parsedData = JSON.parse(data);
  //console.log("parsedData : ", parsedData); //JavaScript object

  if (orders === "getAllOrders") {
    parsedData.forEach((pizzaOrder) => console.log(pizzaOrder));
  } else if (orders === "getOneOrder") {
    if (order_num > parsedData.length) {
      console.log("Order not found. Please enter a valid order number.");
    } else {
      console.log(parsedData[order_num]);
    }
  } else if (orders === undefined) {
    console.log("Please enter order type and/or number");
  }
}

getOrderData();
