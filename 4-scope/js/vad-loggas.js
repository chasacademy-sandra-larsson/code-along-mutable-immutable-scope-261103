// =============================================================
// Vad loggas?
// =============================================================
// Läs en funktion i taget. Skriv ner din gissning. Avkommentera
// sedan anropet längst ner och se om du hade rätt.
// Tre av dem handlar om scope, tre om referenser.
//
// Mina gissningar:
// quiz1:
// quiz2:
// quiz3:
// quiz4:
// quiz5:
// quiz6:



function quiz1() {
  let score = 10;

  function addBonus() {
    let score = 100;
    score = score + 5;
  }

  addBonus();
  console.log("quiz1:", score);
}



function quiz2() {
  const fruits = ["äpple"];

  function addFruit(list) {
    list.push("päron");
  }

  addFruit(fruits);
  console.log("quiz2:", fruits);
}



function quiz3() {
  let total = 0;

  for (let i = 1; i <= 3; i++) {
    total = total + i;
  }

  console.log("quiz3:", total, typeof i);
}



function quiz4() {
  const user = { name: "Ada" };

  function rename(person) {
    person = { name: "Grace" };
  }

  rename(user);
  console.log("quiz4:", user.name);
}



function quiz5() {
  const original = { tags: ["js"] };
  const copy = { ...original };

  copy.tags.push("css");
  console.log("quiz5:", original.tags);
}



function quiz6() {
  if (true) {
    var a = 1;
    let b = 2;
  }

  console.log("quiz6:", a);

  console.log("quiz6:", b);
}



// quiz1();
// quiz2();
// quiz3();
// quiz4();
// quiz5();
// quiz6();
