const words = [
    "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", 
    "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", 
    "magna", "aliqua", "Ut", "enim", "ad", "minim", "veniam", "quis", "nostrud", 
    "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo", 
    "consequat", "Duis", "aute", "irure", "dolor", "in", "reprehenderit", "in", "voluptate", 
    "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur", 
    "Excepteur", "sint", "occaecat", "cupidatat", "non", "proident", "sunt", 
    "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"
  ];
  
  document.getElementById("generateSentenceButton").addEventListener("click", generateSentence);
  document.getElementById("generateWordButton").addEventListener("click", generateWord);
  
  function generateSentence() {
    const outputElement = document.getElementById("output");
    const inputNumber = document.getElementById("inputNumber").value;
    const numberOfSentences = parseInt(inputNumber);
  
    if (isNaN(numberOfSentences) || numberOfSentences <= 0) {
      outputElement.textContent = "Please enter a valid positive number.";
      return;
    }
  
    const sentencesArray = Array.from({ length: numberOfSentences }, getRandomSentence);
    outputElement.textContent = sentencesArray.join(" ");
  }
  
  function generateWord() {
    const outputElement = document.getElementById("output");
    const inputNumber = document.getElementById("inputNumber").value;
    const numberOfWords = parseInt(inputNumber);
  
    if (isNaN(numberOfWords) || numberOfWords <= 0) {
      outputElement.textContent = "Please enter a valid positive number.";
      return;
    }
  
    const wordsArray = Array.from({ length: numberOfWords }, getRandomWord);
    outputElement.textContent = wordsArray.join(" ");
  }
  
  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  
  function getRandomSentence() {
    const sentenceLength = Math.floor(Math.random() * 5) + 5; // Antara 5 dan 10 kata
    const sentenceArray = Array.from({ length: sentenceLength }, getRandomWord);
    return sentenceArray.join(" ") + ".";
  }
  