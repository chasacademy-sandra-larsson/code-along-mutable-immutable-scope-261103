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

const list = [1];
const person = { firstName: "Ada" };



console.groupEnd();



// Steg 2: Globalt scope
// ---------------------------------------------------------------
// Skapa appName högst upp och logga den inifrån en funktion.
console.group("Steg 2: Globalt scope");



console.groupEnd();



// Steg 3: Funktionsscope
// ---------------------------------------------------------------
// Skapa greeting inne i en funktion. Försök logga den utanför.
console.group("Steg 3: Funktionsscope");



console.groupEnd();



// Steg 4: Blockscope
// ---------------------------------------------------------------
// Skapa message inne i en if. Försök logga den efter if-satsen.
// Finns i kvar efter en for-loop?
console.group("Steg 4: Blockscope");

const age = 20;



console.groupEnd();



// Steg 5: var läcker
// ---------------------------------------------------------------
// Gör samma sak som i steg 4, men med var.
console.group("Steg 5: var läcker ur block");



console.groupEnd();



// Steg 6: Shadowing
// ---------------------------------------------------------------
// Skapa color ute och en annan color inne i en funktion.
// Vilken loggas var?
console.group("Steg 6: Shadowing");



console.groupEnd();



// Steg 7: Scope-kedjan
// ---------------------------------------------------------------
// Tre nivåer: globalt, en funktion och ett if-block i funktionen.
// Vad syns inifrån if-blocket? Vad syns utanför det?
console.group("Steg 7: Scope-kedjan");

const playlist = "Fredagsmys";



console.groupEnd();



// Steg 8: EXTRA – funktioner minns var de skapades
// ---------------------------------------------------------------
// createCounter() returnerar en funktion som räknar upp.
// Var bor count? Går den att nå utifrån?
console.group("Steg 8: Closure");



console.groupEnd();



// Steg 9: EXTRA – var och let i en loop
// ---------------------------------------------------------------
// setTimeout i en loop, en gång med var och en gång med let.
