var readline = require("readline-sync");

var score = 0;
//processing name of player
var player = readline.question("What's your name?\n");

player = player.charAt(0).toUpperCase() + player.slice(1);

console.log(
  "Welcome ",
  player + "! 😉 \nLet's begin the - Do you know me quiz."
);

//list of questions
var questionBank = [
  {
    question: "What's my name?",
    answer: "Megha",
  },
  {
    question: "Where do I live",
    answer: "Jaipur",
  },
  {
    question: "Where do I currently work?",
    answer: "Devfolio",
  },
  {
    question: "Who's my favorite fictional character",
    answer: "Sherlock",
  },
];

//function for evaluating answers
function checkAnswers(data, res) {
  if (data.answer == res.charAt(0).toUpperCase() + res.slice(1)) {
    score++;
    console.log("Correct!✅\n Your current Score is\t" + score);
  } else {
    console.log("Wrong!⛔\n Your current Score is\t" + score);
  }
}

//looping over the questions
for (var i in questionBank) {
  var res = readline.question(questionBank[i].question + "\n");
  checkAnswers(questionBank[i], res);
}

//printing the final score
console.log(
  `\n.\n.\nThank you ${player} for taking the quiz \nYour final score is ${score} Press run to try again.`
);
