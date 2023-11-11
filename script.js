const btnContainer = document.querySelector(".btn_container");
const quoteText = document.querySelector(".quote");
const character = document.querySelector(".character");
const anime = document.querySelector(".anime");
const btnArr = [
  "real.",
  "word.",
  "facts.",
  "ykb.",
  "yessir.",
  "right.",
  "too real.",
  "tatakae.",
];

// random button word function
function randomBtnWord() {
  return btnArr[Math.floor(Math.random() * btnArr.length)];
}

// init function on load
function init() {
  randomBtnWord();
  fetch("https://animechan.xyz/api/random")
    .then((response) => response.json())
    .then((quote) => {
      console.log(quote);
      quoteText.textContent = quote.quote;
      character.textContent = `~ ${quote.character} [ ${quote.anime} ]`;
    });
}
document.addEventListener("DOMContentLoaded", init);

// button
btnContainer.addEventListener("click", (e) => {
  e.target.addEventListener("click", () => {
    // change button text
    e.target.textContent = randomBtnWord();

    // fetch api
    fetch("https://animechan.xyz/api/random")
      .then((response) => response.json())
      .then((quote) => {
        // console.log(quote)
        quoteText.textContent = quote.quote;
        character.textContent = `~ ${quote.character} [ ${quote.anime} ]`;
      });
  });
  // .catch(error => {
  //     console.log('Error', error)
  // })
});

// dark mode toggle
const changeMode = document.querySelector(".dark");
const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const quoteContainer = document.querySelector(".quotes_container");
const header = document.querySelector("header");

// dark mode function
function darkModeToggle() {
  body.classList.toggle("dark_mode");
  btnContainer.classList.toggle("dark_btn-container");
  btn.classList.toggle("dark_btn");
  quoteContainer.classList.toggle("dark_quote");
  header.classList.toggle("dark_header");
}

changeMode.addEventListener("click", darkModeToggle);
