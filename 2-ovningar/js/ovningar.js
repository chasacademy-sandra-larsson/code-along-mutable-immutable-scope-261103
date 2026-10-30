// =============================================================
// Del 2: Skriv om utan att mutera
// =============================================================
// Varje funktion nedan ger rätt svar, men ändrar det den får.
// Skriv om den så att den returnerar något NYTT och lämnar
// originalet orört. Sidan rättar när du laddar om.
//
// Verktygen: [...array], { ...object }, map, filter, toSorted,
// toSpliced och rest-destrukturering.



// 1. Lägg till en todo sist
// ---------------------------------------------------------------
function addTodo(todos, text) {
  todos.push(text);
  return todos;
}



// 2. Ta bort todon på plats index
// ---------------------------------------------------------------
function removeTodo(todos, index) {
  todos.splice(index, 1);
  return todos;
}



// 3. Sortera produkterna, billigast först
// ---------------------------------------------------------------
function sortByPrice(products) {
  return products.sort((p, q) => p.price - q.price);
}



// 4. Byt namn på en användare
// ---------------------------------------------------------------
function renameUser(user, newName) {
  user.name = newName;
  return user;
}



// 5. Bocka av en todo (done: true blir false och tvärtom)
// ---------------------------------------------------------------
// Svårare: todos är en array med objekt. Det räcker inte att
// kopiera arrayen, todon du ändrar måste också vara ny.
function toggleDone(todos, id) {
  const todo = todos.find((todo) => todo.id === id);
  todo.done = !todo.done;
  return todos;
}



// 6. Flytta en användare till en ny stad
// ---------------------------------------------------------------
// Svårare: city ligger i ett objekt i objektet. Kom ihåg fällan.
function moveToCity(user, city) {
  user.address.city = city;
  return user;
}



// 7. Ta bort lösenordet innan användaren skickas vidare
// ---------------------------------------------------------------
function withoutPassword(user) {
  delete user.password;
  return user;
}



// 8. EXTRA: Slå ihop standardinställningar med användarens val
// ---------------------------------------------------------------
function mergeSettings(defaults, choices) {
  for (const key in choices) {
    defaults[key] = choices[key];
  }
  return defaults;
}



// 9. EXTRA: Största talet, oavsett hur många tal man skickar in
// ---------------------------------------------------------------
// biggest(3, 9, 4) ska ge 9. Just nu tar den bara emot en array.
// Använd rest OCH spread.
function biggest(numbers) {
  return Math.max(numbers);
}
