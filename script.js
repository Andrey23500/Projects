const btn = document.getElementById("submit");
const block = document.getElementById("words");
let str;

btn.addEventListener("click", () => {
  str = document.getElementById("inp").value;
  let word = getWords(str);
  let sortedWord = sortWords(word);
  block.innerHTML = "<h3>Топ-3 популярных слов</h3>";
  for (let i = 0; i < 3; i++) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = sortedWord[i];
    block.append(newDiv);
  }
});

function getWords(string) {
  //Проверка на строку
  if (typeof string === "string") {
    let arrWords = string.split(" ");
    let words = {};

    for (let i = 0; i < arrWords.length; i++) {
      if (words.hasOwnProperty(arrWords[i])) {
        words[arrWords[i]] = words[arrWords[i]] + 1;
      } else {
        words[arrWords[i]] = 1;
      }
    }

    return words;
  }
}

function sortWords(words) {
  let itemSorted = Object.keys(words).sort(function (a, b) {
    return words[a] - words[b];
  });
  itemSorted.reverse();

  return itemSorted;
}
