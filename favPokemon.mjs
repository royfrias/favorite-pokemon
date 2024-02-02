import readline from "readline";

//function to ask questions
const rl = readline.createInterface(process.stdin, process.stdout);
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

//fetch all pokemon data from pokeapi
const response = await fetch(
  "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
);
const allPokemon = await response.json();

//convert allPokemon.results from array of objects to array of names
const pokemonNames = allPokemon.results.map((element) => element.name);




//your code here!
let answer = await ask("Please enter your pokemon name!");
// console.log(answer)
function myFavPokemon(input) {
  if (pokemonNames.includes(answer.toLowerCase())) {
    console.log(input);
  } else if (!(input === pokemonNames)) {
    console.log(`${input} is not a real pokemon`);
  }
}

myFavPokemon(answer);
//end your code
process.exit();