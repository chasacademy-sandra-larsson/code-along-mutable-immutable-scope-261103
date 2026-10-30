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



console.groupEnd();



// Steg 2: Arrayer och objekt delas
// ---------------------------------------------------------------
// Skapa a = [1, 2, 3]. Sätt b = a. Gör b.push(4). Logga a.
// Jämför a === b. Gör samma sak med ett objekt.
// Vad ger [1] === [1]?
// Skiss: img/02-samma-array.svg
console.group("Steg 2: Arrayer och objekt delas");



console.groupEnd();



// Steg 3: Mutable och immutable
// ---------------------------------------------------------------
// Mutable = går att ändra på plats. Immutable = går inte.
// Vad händer med strängen när du kör toUpperCase()?
// Vad händer om du försöker ändra första bokstaven?
console.group("Steg 3: Mutable och immutable");

const greeting = "hej";



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



console.groupEnd();



// Steg 5: Spread på objekt
// ---------------------------------------------------------------
// Gör en ny ada som är ett år äldre, utan att ändra ada.
// Vad händer om du byter plats på ...ada och age?
// Slå ihop defaults och choices till settings.
console.group("Steg 5: Spread på objekt");

const ada = { name: "Ada", age: 36, city: "Lund" };
const defaults = { theme: "light", fontSize: 16 };
const choices = { theme: "dark" };



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

const account = { name: "Ada", email: "ada@example.com", password: "hemligt" };



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



console.groupEnd();



// Steg 10: Object.freeze
// ---------------------------------------------------------------
// Frys config. Försök ändra theme. Försök ändra colors.main.
console.group("Steg 10: Object.freeze");

const config = { theme: "dark", colors: { main: "blue" } };



console.groupEnd();
