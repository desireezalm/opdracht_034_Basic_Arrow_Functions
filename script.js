// DEEL A

// zet de functie om naar een arrow functie
const ikRockArrowFunctions = () => {
    console.log("Joe, ik rock de arrow functions!");
  };
  
  ikRockArrowFunctions()


// DEEL B

// schrijf de onderstaande functie om naar een arrow functie op 1 regel

const fivePlusSeven = () => console.log("Het antwoord van deel B is: " + (5+7))

fivePlusSeven();


// DEEL C

// Als je parameter toe wilt voegen aan een arrow function, dan gaat dat op precies dezelfde manier als je gewend bent: tussen de haakjes.
// schrijf een arrow function, op 1 regel (dus met een impliciete return statement), die de params a en b bij elkaar optelt. 
// Noem de functie myFunction.

const myFunction = (a, b) => console.log("Het antwoord van deel C is: " + (a+b))

myFunction(2, 9);


// DEEL D

// Als je slechts 1 parameter hebt, kun je de haakjes zelfs helemaal weglaten.
// schrijf een arrow function op 1 regel, die de parameter a behoudt, en altijd a plus 5 returned. Noem de functie addFive.

const addFive = a => console.log("Het antwoord van deel D is: " + (a+5))

addFive(10)


// DEEL E

// Je hebt gezien dat arrow functions een implicit return statement hebben wanneer je de code op 1 regel kunt schrijven. 
// Er is 1 uitzondering, namelijk bij het returnen van een object {} . 
// Wanneer je een object returned moet het object in een () gezet worden, om niet verward te worden met de curly braces {} van een function.
// schrijf een arrow function met de naam createObject met een implicit return statement (dus op 1 regel) die een simpel object returned: {greeting: "hoi"}

const createObject = () => ({greeting: "hoi"})

console.log(createObject())