// =============================================================
// Del 4: Scope
// =============================================================
// Scope = var en variabel syns. Gissa vad som loggas innan du
// sparar. Kod som ger fel lägger vi i try/catch, bara för att
// resten av filen ska fortsätta köras. Felet loggas i rött.
// Skiss: img/08-scope-lador.svg



// Steg 1: const låser pilen, inte arrayen
// ---------------------------------------------------------------
// Bryggan från del 1. Pusha till list. Försök sedan list = [].
// Ändra firstName på person. Varför går det ena men inte det andra?
// Skiss: img/07-const-laser-pilen.svg
console.group("Steg 1: const låser pilen");

let list = [1];
list.push(2);
console.log("list:", list);

const hej = [1,2]
list = hej;



console.groupEnd();



// Steg 2: Globalt scope
// ---------------------------------------------------------------
// Skapa appName högst upp och logga den inifrån en funktion.
console.group("Steg 2: Globalt scope");


const appName = "Spellistan";


function showAppName() {

    console.log("inne i funktionen", appName)
}

showAppName();


console.groupEnd();



// Steg 3: Funktionsscope
// ---------------------------------------------------------------
// Skapa greeting inne i en funktion. Försök logga den utanför.
console.group("Steg 3: Funktionsscope");


function makeGreeting() {
    const greeting = "HEj!";
    console.log("inne i funktionen", greeting);
}

makeGreeting();

//console.log("ute ur funktionen", greeting);



console.groupEnd();



// Steg 4: Blockscope
// ---------------------------------------------------------------
// Skapa message inne i en if. Försök logga den efter if-satsen.
// Finns i kvar efter en for-loop?
console.group("Steg 4: Blockscope");

const age = 20;

if(age < 20) {
    const message = "Hej 20 åring";
    console.log("inne i if-sats", message);
}


//console.log("efter if", message);


for(let i = 0; i < 3; i++) {
    // i finns bara här inne
    console.log(i);
    
}

console.log


console.groupEnd();



// function test() {


//     function test2() {
       
//         for(var i = 0 ) {

//             return 
//         }


//     }
// }


// Steg 5: var läcker
// ---------------------------------------------------------------
// Gör samma sak som i steg 4, men med var.
console.group("Steg 5: var läcker ur block");

function testVar() {

if(true) {
    var leaky = "Jag läcker";
}

}   

//console.log("leaky", leaky)


console.groupEnd();



// Steg 6: Shadowing
// ---------------------------------------------------------------
// Skapa color ute och en annan color inne i en funktion.
// Vilken loggas var?
console.group("Steg 6: Shadowing");


 const color = "blå";

 function paint() {
    const color = "röd";
    console.log("inne: ", color);
 }
  

 paint();
 console.log("ute", color);

console.groupEnd();



// Steg 7: Scope-kedjan
// ---------------------------------------------------------------
// Tre nivåer: globalt, en funktion och ett if-block i funktionen.
// Vad syns inifrån if-blocket? Vad syns utanför det?
console.group("Steg 7: Scope-kedjan");

const playlist = "Fredagsmys";


function greet() {
  const listener = "Ada";

  if (playlist) {
    const msg = "Hej";
    console.log(msg, listener, playlist); // alla tre syns
  }

  try {
    console.log(msg);
  } catch (error) {
    console.error(error.message); // msg is not defined
  }
}

greet();


console.groupEnd();





