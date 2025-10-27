/* -------------------------
💎 Birthstone Finder
----------------------------
We will refactor the Birthstone Finder app 
to read birthstone data from a separate JSON file.
------------------------- */

// We'll practice
// - using a built-in node module called fs(file system)
// - read data from a file
// - practice ES module syntax vs CommonJS (old way: legacy code) syntax, which are both for accesssing Node Modules

//start with import statments

//two ways for accessing a Node Module
//CommonJS (old way: legacy code) syntax (some computers use older Versions 11 and below so we may need to use old syntax)
//const fs = require("fs/promises");

//New way: ES Modules
import fs from "fs/promises"; //gives us tools for reading and writing files

//we will use asynchronous version of fs (fs/promises)
//; is JS way of separating different lines of code. Many Devs use ; for consistency and habit.

//console.log(fs); //comment out console.log messages that you don't need or delete it eventually

//Get month and save in a variable declared as 'month'
let month = process.argv[2];

//Read birthstone data from the data.json file, and get the birthstone for the user-inputed month
async function getBirthstone() {
  //the readFile method is part of the fs objecy.
  //it takes in 2 parameters
  //1. The file we want to read from
  //2. The way the file is encoded
  const data = await fs.readFile("./data.json", "utf8"); //one dot(.) means current folder, two dots (..) means parent folder
  // ../../../???
  //Just like API call, it takes time to get data from another file, so we will use await keyword. Meaning wait to get all data before we move on to the next line of code
  //we make the function as async to use the await keyword We can only use await keyword in a function that is declared as an asynchronous function
  console.log("data : ", data); //string (JSON string)
  //data is still in json format.
  //convert it to JavaScript : We need to parse the JSON object into JavaScript
  //Declare a variable named parsedData and store the parsed data in it converted using the JSON.parse method
  const parsedData = JSON.parse(data);
  console.log("parsedData : ", parsedData); //JavaScript object
  parsedData[month]
    ? console.log(`The birthstone for ${month} is ${parsedData[month]}.`)
    : console.log("Invalid month. Please enter a valid month.");
}

getBirthstone();
