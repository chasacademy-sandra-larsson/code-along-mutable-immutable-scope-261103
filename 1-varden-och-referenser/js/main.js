// =============================================================
// Del 1: Värden och referenser
// =============================================================
// Allt i den här delen händer i konsolen. Gissa ALLTID vad som
// loggas innan du sparar. Skisserna finns på sidan och i img/.
//
// console.group samlar varje steg under en egen rubrik i konsolen.
// Fäll ut ett steg i taget.



// Steg 1: Primitiver kopieras
// ---------------------------------------------------------------
// Tal, strängar, booleans, null och undefined är primitiver.
// Skapa x = 5. Sätt y = x. Öka y med 1. Logga båda.
// Skiss: img/01-primitiv-och-referens.svg, vänster sida.
console.group("Steg 1: Primitiver kopieras");

let x = 5;
let y = x;
y = y + 1;

console.log("x:", x);
console.log("y:", y);




console.groupEnd();



// Steg 2: Arrayer och objekt delas
// ---------------------------------------------------------------
// Skapa a = [1, 2, 3]. Sätt b = a. Gör b.push(4). Logga a.
// Jämför a === b. Gör samma sak med ett objekt.
// Vad ger [1] === [1]?
// Skiss: img/02-samma-array.svg
console.group("Steg 2: Arrayer och objekt delas");

const a = [1,2,3] 
const b = a; // Kopierar referensen, "pilen"
b.push(4);

console.log("a:", a);
console.log(a === b);


console.groupEnd();



// Steg 3: Mutable och immutable
// ---------------------------------------------------------------
// Mutable = går att ändra på plats. Immutable = går inte.
// Vad händer med strängen när du kör toUpperCase()?
// Vad händer om du försöker ändra första bokstaven?
console.group("Steg 3: Mutable och immutable");

const greeting = "hej";

greeting.toUpperCase();
console.log("greeting:", greeting);

const loud = greeting.toUpperCase();
console.log("loud: ", loud);

greeting[0] = "H";
console.log("greeting:", greeting);


console.groupEnd();



// Steg 4: Spread på arrayer
// ---------------------------------------------------------------
// Kopiera numbers med spread och pusha till kopian.
// Lägg till ett tal först och ett sist, utan push och unshift.
// Slå ihop numbers och moreNumbers.
// Skiss: img/03-spread-ny-array.svg
console.group("Steg 4: Spread på arrayer");

const numbers = [1, 2, 3];
const moreNumbers = [7, 8];

const copy = [...numbers];
copy.push(4)
console.log("copy: ", copy);
console.log("numbers: ", numbers);
console.log("numbers === copy", numbers === copy);


const withFirst = [666, ...numbers]; // Immutable sättet, istället för mutable unshift
console.log("withFirst", withFirst);

const withLast = [...numbers, 666]; // Immutable sättet, istället för mutable push
console.log("withLast", withLast);

// Slå ihop arrayer
const merged = [...numbers, ...moreNumbers]; 
console.log("merged: ", merged)
console.groupEnd();



// Steg 5: Spread på objekt
// ---------------------------------------------------------------
// Gör en ny ada som är ett år äldre, utan att ändra ada.
// Vad händer om du byter plats på ...ada och age?
// Slå ihop defaults och choices till settings.
console.group("Steg 5: Spread på objekt");

const ada = { name: "Ada", age: 36, city: "Lund" };


// Mutable
//ada.age = 37
// Immutable ändra med spread
const olderAda = {
  ...ada,
   age: 37,
}

console.log("olderAda", olderAda);

// Vanligt mönster är att standardvärden skriver över användarens val
const defaults = { theme: "light", fontSize: 16 };
const choices = { theme: "dark" };

const settings = {
  ...defaults,
  ...choices
}

console.log("settings: ", settings);

console.groupEnd();



// Steg 6: Rest
// ---------------------------------------------------------------
// Samma tre punkter, men tvärtom: rest packar IHOP.
// 1. sum(...values) som tar hur många tal som helst.
// 2. Plocka ut first och "resten" ur en array.
// 3. Ta bort password från account utan att ändra account.
// 4. Math.max med numbers.
// Skiss: img/06-spread-och-rest.svg
console.group("Steg 6: Rest");

function sum(...values) {

  return values.reduce((total, value) => total + value, 0);

}

console.log("Sum 1:", sum(1,2,3));
console.log("Sum 2:", sum(1,2,3,4,5,6));

const [first, ...others ] = ["Sandra", "Andreas", "Nehal"];
console.log("others: ", others);



const account = { name: "Ada", email: "ada@example.com", password: "hemligt" };
const {password, ...publicAccount} = account; 
console.log("publicAccount", publicAccount);


console.log("Math max:", Math.max(...numbers));

console.groupEnd();



// Steg 7: Metoder som muterar och metoder som skapar nytt
// ---------------------------------------------------------------
// sort, reverse, splice, push och pop ändrar originalet.
// toSorted, toReversed, toSpliced och with returnerar en ny array.
// Testa båda sorterna. Logga originalet efteråt.
console.group("Steg 7: Muterande och icke-muterande metoder");

const scores = [40, 100, 7];
const letters = ["a", "b", "c", "d"];



console.groupEnd();



// Steg 8: Funktioner som ändrar det de får
// ---------------------------------------------------------------
// Skriv addItemMutating(list, item) med push, och addItem(list, item)
// med spread. Anropa båda. Vilken ändrade din array?
// Ge sedan alla varor i cart 10 % rabatt utan att ändra cart.
console.group("Steg 8: Sidoeffekter");

const cart = [
  { name: "Kaffe", price: 50 },
  { name: "Bulle", price: 30 },
];



console.groupEnd();



// Steg 9: Fällan – spread kopierar bara första nivån
// ---------------------------------------------------------------
// Kopiera grace med spread och flytta kopian till Malmö.
// Var bor grace nu? Laga det på två sätt: sprid även address,
// och använd structuredClone.
// Skiss: img/04-grund-kopia.svg och img/05-structured-clone.svg
console.group("Steg 9: Grund kopia");

const grace = { name: "Grace", address: { city: "Lund" } };
const graceCopy = {...grace};
graceCopy.address.city = "Malmö";

console.log("grace.adress.city", grace.address.city);  // Vi ändrade kopien, men orginelt ändrades också! 

// Lösning 1: sprid även den inre nivåd
const sandra = { name: "Sandra", address: { city: "Huddinge" } };
const sandraCopy = { 
  ...sandra,
  adress: {... sandra.adress, city: "Solna"}
}
console.log("sandra.adress.city", sandra.address.city);

// Lösning 2: Använder structurs clone

const margaret = { name: "margaret", address: { city: "Los Angeles" } };
//const shallowCopy = {...margaret }; // Funkar itne för djupare nivåer
const deeepMargaretClone = structuredClone(margaret); // Deep clone, koperiar rätt ävenn nästlade nivåer 
//shallowCopy.address.city = "New York"; 
console.log("margeret.adress.city", margaret.address.city); // Los Angeles



console.groupEnd();



// Steg 10: Object.freeze
// ---------------------------------------------------------------
// Frys config. Försök ändra theme. Försök ändra colors.main.
console.group("Steg 10: Object.freeze");

const config = Object.freeze({ theme: "dark", colors: { main: "blue" } });
config.theme = "light";
console.log("config.theme:", config.theme);



console.groupEnd();
