let readlineSync = require('readline-sync'),
    MAX = 5, MIN = 0, value = 5, key;
const chalk = require('chalk');

let userName = readlineSync.question(chalk.underline("Hey There!! What is your name: "));

console.log(`\n\nWelcome ${chalk.blue(userName)} to the comic quiz--> `, chalk.bold.bgBlue("DO YOU KNOW DC?\n\n"));


let score = 0;

let qna = [{ question: "In Which city does Batman lives? ", answer: "Gotham" }, { question: "Who is Superman's arch nemesis (Full Name)? ", answer: "Lex Luthor" }, { question: "Diana is the real name of which Superhero? ", answer: "Wonder Woman" }, { question: "What is the real name of Superman (Full Name)? ", answer: "Clark Kent" }, { question: "Who says 'I am Vengeance'? ", answer: "Batman" }];

let highscoreCard = [{ name: "Gagan", score: 5 }, { name: "Akash", score: 2 }]

//Question Answer Processing
for (i = 0; i < qna.length; i++) {
    let question = qna[i].question;
    let answer = qna[i].answer;
    let userAnswer = readlineSync.question(question);
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        score++;
        console.log(chalk.green.bold(`Yay! Right Answer. Your Score is ${score}\n`));
    }
    else {
        if (score > 0)
            score--;
        console.log(chalk.red.bold(`Oops! Wrong Answer. Your Score is ${score}\n`));
    }

}

//SCORECARD SECTION
highscoreCard.forEach((person) => {
    if (person.score < score)
        console.log("Yay, you surpassed", person.name);
}
);
console.log(chalk.bgYellow("\n\nYour Total Score:"), score)

console.log("\n-----Score Card-----")
for (i = 0; i < highscoreCard.length; i++) {
    console.log(chalk.bold(highscoreCard[i].name), ":", highscoreCard[i].score);
}

//RATING SUBMIT SECTION
console.log(chalk.italic("\n\n" + (new Array(20)).join(' ') + "Please Provide a Rating :)"))
console.log((new Array(20)).join(' ') +
    '!! Press A to increase [A]<- -> [D] Press D to increase !!  Submit: [SPACE]\n');

while (true) {
    console.log((new Array(20)).join(' ') + '\x1B[1A\x1B[K|' +
        (new Array(value + 1)).join(' - ') + '[*]' +
        (new Array(MAX - value + 1)).join(' - ') + '| ' + value);
    key = readlineSync.keyIn('',
        { hideEchoBack: true, mask: '', limit: 'ad ' });
    if (key === 'a') { if (value > MIN) { value--; } }
    else if (key === 'd') { if (value < MAX) { value++; } }
    else { break; }
}
