// =============================================================
// Rättningen. Du behöver inte ändra något här.
// =============================================================
// Varje test kollar tre saker:
//   1. att svaret är rätt
//   2. att originalet är orört
//   3. att funktionen returnerar något nytt, inte samma pil

const resultList = document.querySelector("#results");

// Jämför innehåll, inte pilar.
function same(actual, expected) {
  return JSON.stringify(actual) === JSON.stringify(expected);
}

function test(title, run) {
  const problems = [];
  const expect = (condition, problem) => {
    if (!condition) problems.push(problem);
  };

  try {
    run(expect);
  } catch (error) {
    problems.push(`Kraschade: ${error.message}`);
  }

  report(title, problems);
}

function report(title, problems) {
  const ok = problems.length === 0;

  const li = document.createElement("li");
  li.className = ok ? "result result-ok" : "result";

  const heading = document.createElement("strong");
  heading.textContent = `${ok ? "✅" : "❌"} ${title}`;
  li.append(heading);

  if (!ok) {
    const ul = document.createElement("ul");
    for (const problem of problems) {
      const item = document.createElement("li");
      item.textContent = problem;
      ul.append(item);
    }
    li.append(ul);
  }

  resultList.append(li);
  console.log(ok ? "✅" : "❌", title, ...problems);
}



test("1. addTodo", (expect) => {
  const todos = ["Handla", "Plugga"];
  const result = addTodo(todos, "Träna");
  expect(same(result, ["Handla", "Plugga", "Träna"]), "Fel svar.");
  expect(same(todos, ["Handla", "Plugga"]), "Originalet ändrades.");
  expect(result !== todos, "Returnerar samma array, inte en ny.");
});

test("2. removeTodo", (expect) => {
  const todos = ["Handla", "Plugga", "Träna"];
  const result = removeTodo(todos, 1);
  expect(same(result, ["Handla", "Träna"]), "Fel svar.");
  expect(same(todos, ["Handla", "Plugga", "Träna"]), "Originalet ändrades.");
  expect(result !== todos, "Returnerar samma array, inte en ny.");
});

test("3. sortByPrice", (expect) => {
  const products = [
    { name: "Kaffe", price: 50 },
    { name: "Bulle", price: 30 },
    { name: "Tårta", price: 90 },
  ];
  const result = sortByPrice(products);
  expect(same(result.map((p) => p.name), ["Bulle", "Kaffe", "Tårta"]), "Fel ordning.");
  expect(same(products.map((p) => p.name), ["Kaffe", "Bulle", "Tårta"]), "Originalet ändrades.");
  expect(result !== products, "Returnerar samma array, inte en ny.");
});

test("4. renameUser", (expect) => {
  const user = { name: "Ada", age: 36 };
  const result = renameUser(user, "Grace");
  expect(same(result, { name: "Grace", age: 36 }), "Fel svar.");
  expect(user.name === "Ada", "Originalet ändrades.");
  expect(result !== user, "Returnerar samma objekt, inte ett nytt.");
});

test("5. toggleDone", (expect) => {
  const todos = [
    { id: 1, text: "Handla", done: false },
    { id: 2, text: "Plugga", done: false },
  ];
  const result = toggleDone(todos, 2);
  expect(result[1]?.done === true, "Todo 2 blev inte avbockad.");
  expect(result[0]?.done === false, "Todo 1 ska inte ändras.");
  expect(todos[1].done === false, "Originalet ändrades. Todon måste också vara ny, inte bara arrayen.");
  expect(result !== todos, "Returnerar samma array, inte en ny.");
});

test("6. moveToCity", (expect) => {
  const user = { name: "Ada", address: { street: "Storgatan 1", city: "Lund" } };
  const result = moveToCity(user, "Malmö");
  expect(result.address?.city === "Malmö", "Fel stad.");
  expect(result.address?.street === "Storgatan 1", "Gatan försvann.");
  expect(user.address.city === "Lund", "Originalet ändrades. Spread kopierar bara första nivån.");
  expect(result !== user, "Returnerar samma objekt, inte ett nytt.");
});

test("7. withoutPassword", (expect) => {
  const user = { name: "Ada", email: "ada@example.com", password: "hemligt" };
  const result = withoutPassword(user);
  expect(!("password" in result), "password finns kvar i svaret.");
  expect(result.email === "ada@example.com", "email försvann.");
  expect(user.password === "hemligt", "Originalet ändrades.");
});

test("8. EXTRA mergeSettings", (expect) => {
  const defaults = { theme: "light", fontSize: 16 };
  const choices = { theme: "dark" };
  const result = mergeSettings(defaults, choices);
  expect(same(result, { theme: "dark", fontSize: 16 }), "Fel svar.");
  expect(defaults.theme === "light", "Standardinställningarna ändrades.");
});

test("9. EXTRA biggest", (expect) => {
  expect(biggest(3, 9, 4) === 9, "biggest(3, 9, 4) ska ge 9.");
  expect(biggest(1) === 1, "biggest(1) ska ge 1.");
});
