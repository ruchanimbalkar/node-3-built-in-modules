/* -------------------------
💎 Birthstone Finder
----------------------------
Create a program that determines the birthstone for a month inputted by the user. 

Check the README.md file for instructions.
------------------------- */

// birthstone data object
const birthstones = {
  January: "Garnet",
  February: "Amethyst",
  March: "Aquamarine",
  April: "Diamond",
  May: "Emerald",
  June: "Pearl, Alexandrite, or Moonstone",
  July: "Ruby",
  August: "Peridot",
  September: "Sapphire",
  October: "Opal or Tourmaline",
  November: "Topaz or Citrine",
  December: "Tanzanite, Zircon, or Turquoise",
};

const { argv } = process;
//Get month and save in a variable declared as 'month'
let month = argv[2];
//Use a switch case statement to find birthstone
//Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#taking_advantage_of_fall-through:~:text=Taking%20advantage%20of%20fall%2Dthrough
switch (month) {
  case undefined:
    console.log("Please enter month");
    break;
  case "January":
  case "February":
  case "March":
  case "April":
  case "May":
  case "June":
  case "July":
  case "August":
  case "September":
  case "October":
  case "November":
  case "December":
    console.log(`The birthstone for ${month} is ${birthstones[month]}.`);
    break;

  default:
    console.log("Invalid month. Please enter a valid month.");
}
