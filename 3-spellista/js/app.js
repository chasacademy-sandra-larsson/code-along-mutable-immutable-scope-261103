// =============================================================
// Del 3: Spellistan med ångra-knapp
// =============================================================
// Appen fungerar, förutom Ångra. Alla funktioner muterar songs.
// Då pekar alla sparade versioner på samma array, och det finns
// inget att gå tillbaka till.
// Skiss: img/09-angra-historik.svg
//
// Steg 1: Lägg till en låt och klicka på Ångra. Läs felet i konsolen.
// Steg 2: Laga felet (se Data). Ångra nu. Titta på historiken:
//         varför ser alla rader likadana ut?
// Steg 3–6: Skriv om funktionerna så att de skapar en NY lista.



// ---------- 1. Element i DOM:en ----------

const songForm = document.querySelector("#song-form");
const titleInput = document.querySelector("#title");
const artistInput = document.querySelector("#artist");
const songList = document.querySelector("#song-list");
const historyList = document.querySelector("#history-list");
const sortButton = document.querySelector("#btn-sort");
const undoButton = document.querySelector("#btn-undo");



// ---------- 2. Data ----------

// Steg 2: Ångra kraschar på songs = versions.pop().
// Vad är det för skillnad på const och let? Skiss: img/07-const-laser-pilen.svg
const songs = [
  { id: 1, title: "Euphoria", artist: "Loreen", liked: false },
  { id: 2, title: "Dancing Queen", artist: "ABBA", liked: true },
  { id: 3, title: "The Final Countdown", artist: "Europe", liked: false },
  { id: 4, title: "Dancing On My Own", artist: "Robyn", liked: false },
];

// Gamla versioner av songs.
const versions = [];



// ---------- 3. Funktioner ----------

// Spara versionen vi har NU, innan den ändras.
function saveHistory() {
  versions.push(songs);
}

// Steg 3: Lägg till med spread
function addSong(title, artist) {
  saveHistory();
  songs.push({ id: Date.now(), title, artist, liked: false });
  render();
}

// Steg 4: Ta bort med filter
function removeSong(id) {
  saveHistory();
  const index = songs.findIndex((song) => song.id === id);
  songs.splice(index, 1);
  render();
}

// Steg 5: Sortera med toSorted
function sortSongs() {
  saveHistory();
  songs.sort((p, q) => p.title.localeCompare(q.title, "sv"));
  render();
}

// Steg 6: Gilla. Prova först songs = [...songs] och ändra sedan låten.
// Gilla och ångra. Varför ändras hjärtat i historiken också?
function toggleLike(id) {
  saveHistory();
  const song = songs.find((song) => song.id === id);
  song.liked = !song.liked;
  render();
}

function undo() {
  if (versions.length === 0) return;
  songs = versions.pop();
  render();
}

function createButton(text, label, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "button-icon";
  button.textContent = text;
  button.setAttribute("aria-label", label);
  button.addEventListener("click", onClick);
  return button;
}

function renderSongs() {
  songList.innerHTML = "";

  for (const song of songs) {
    const li = document.createElement("li");
    li.className = song.liked ? "song song-liked" : "song";

    const text = document.createElement("span");
    text.className = "song-text";
    const title = document.createElement("strong");
    title.textContent = song.title;
    const artist = document.createElement("span");
    artist.className = "text-muted";
    artist.textContent = ` ${song.artist}`;
    text.append(title, artist);

    // Funktionerna som skickas till knapparna minns song.id.
    // De ser variabler i scopet där de skapades. Mer om det i del 4.
    const likeButton = createButton(song.liked ? "♥" : "♡", `Gilla ${song.title}`, () => toggleLike(song.id));
    likeButton.classList.add("button-like");
    likeButton.setAttribute("aria-pressed", song.liked);
    const removeButton = createButton("✕", `Ta bort ${song.title}`, () => removeSong(song.id));

    li.append(text, likeButton, removeButton);
    songList.append(li);
  }
}

function renderHistory() {
  historyList.innerHTML = "";

  for (const version of versions.toReversed()) {
    const li = document.createElement("li");
    const titles = version.map((song) => (song.liked ? `♥ ${song.title}` : song.title));
    li.textContent = titles.join(", ") || "(tom lista)";
    historyList.append(li);
  }
}

function render() {
  renderSongs();
  renderHistory();
  undoButton.disabled = versions.length === 0;
}

function handleSubmit(event) {
  event.preventDefault();

  const title = titleInput.value.trim();
  const artist = artistInput.value.trim();
  if (!title || !artist) return;

  addSong(title, artist);
  songForm.reset();
  titleInput.focus();
}



// ---------- 4. Händelser ----------

songForm.addEventListener("submit", handleSubmit);
sortButton.addEventListener("click", sortSongs);
undoButton.addEventListener("click", undo);

render();
