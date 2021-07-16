var readlineSync = require("readline-sync"); //funcn to take input

var user = readlineSync.question("Enter your Name : ");
console.log("Welcome " + user + "," + " Do you know c/c++ Programming ?");
var ans = readlineSync.question("Yes or No ? ");
ans = ans.toUpperCase();
var score = 0;
var Level = 0;

// var highScore=[
//     {
// 	Name : "Nimbu",
// 	userHighScore : "4"
// 	}
// ]

// function checkHighScore(userScore)
// {
//   if(userScore>highScore.userHighScore)
//   {
// 	  console.log("wohhhhhh ! This is the highest score : "+userHighScore );

// 	  console.log("previous highest score was : "+highScore.userHighScore +"Scored by : "+highScore.name);

// 	  console.log("Send me the Screenshot of Your Highest Score");
//   }
// }

//objects of quetions
questionOne = {
  question: "\nQ.1 C++ Is a Middle-level language ? ",
  answer: "yes",
};
questionTwo = {
  question:
    'Q.2 "//Comment" is correct syntax to create a single-line comment in the C++ program ? ',
  answer: "yes",
};
questionThree = {
  question:
    'Q.3 "Cout << Hello world! ;" correct syntax to print the message in C++ language ? ',
  answer: "yes",
};
questionFour = {
  question: "Q.4 An array is a set of distinct data items ? ",
  answer: "no",
};
questionFive = {
  question:
    'Q.5 "#include <Filename.h>" is the correct syntax to add the header file in the C++ program ? ',
  answer: "yes",
};
questionSix = {
  question:
    "Q.6 To print the address of any variable, a user can use the '&' operator ? ",
  answer: "yes",
};
questionSeven = {
  question:
    "Q.7 A language that can generate the new data types is known as the 'extensible languages' as they can handle the new data types ? ",
  answer: "yes",
};
questionEight = {
  question: "Q.8 Dennis Ritchie is the original creator of the C++ language ? ",
  answer: "no",
};
questionNine = {
  question:
    'Q.9 The "cin.get()" is one of the several functions provided in C++ language that is used to read the single or multiple characters to console ? ',
  answer: "yes",
};
questionTen = {
  question:
    'Q.10 The C++ language is "Semi Object-oriented or Partial Object-oriented" object-oriented language ? ',
  answer: "yes",
};
//Array of objects
var quiz = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
  questionSix,
  questionSeven,
  questionEight,
  questionNine,
  questionTen,
];

if (ans === "YES") {
  //if condition start
  console.log("\nRules 1: Type yes or no and Press Enter");

  for (
    var i = 0;
    i < quiz.length;
    i++ //for loop starts
  ) {
    var userAnswer = readlineSync.question(quiz[i].question);

    if (userAnswer.toUpperCase() === quiz[i].answer.toUpperCase()) {
      score++;
      console.log("You are right || current score is : " + score + "\n");
    } else {
      score--;
      console.log("you are wrong || current score is : " + score + "\n");
    }
  }
  //for loop ends
  console.log("----------------------------\n");
  if (score < 5) {
    console.log("Sed lyf ! Your final score is : " + score);
    console.log("Try again");
  } else {
    console.log("Congrats ! Your final score is : " + score);
    //  checkHighScore(score);
  }
  console.log("\n----------GAME OVER----------");
}
//if condition ends
else {
  console.log("\n" + user + "  Padhai Likhai karo IAS WIAS bano");
  console.log("\n----------GAME OVER----------");
}
