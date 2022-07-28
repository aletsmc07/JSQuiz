import { realQues } from "../JS/importQuestions.js";
import { showInterface } from "../JS/interface.js";

class Quiz {
    questionIndex = 0
    score = 0

    constructor(questions) {
        this.questions = questions
    }

    getQuesIndex() {
        return this.questions[this.questionIndex]
    }

    guess(answer) {
        console.log(answer)
        if (this.getQuesIndex().correctAns(answer)) {
            this.score++
        }
        this.questionIndex++
    }

    finishQuiz() {
        return this.questions.length === this.questionIndex
    }
}

const changeQuestion = (quiz, showinterface) => {
    if (quiz.finishQuiz()) {
        showinterface.showScore(quiz.score);
    } else {
        showinterface.showQ(quiz.getQuesIndex().text);
        showinterface.showChoices(quiz.getQuesIndex().choices, (currentAns) => {
            quiz.guess(currentAns);
            changeQuestion(quiz, showinterface);
        });
        showinterface.showProgress(quiz.questionIndex + 1, quiz.questions.length)
    }

}

function main() {
    const quiz = new Quiz(realQues);
    const showinterface = new showInterface();
    changeQuestion(quiz, showinterface);

}
main();


let time = 0.1;
let quizTimeMin = time * 60 * 60;
let quizTime = quizTimeMin / 60;
let counting = document.getElementById("countdown");
function timer() {
    let quizTimer = setInterval(function () {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            main.break;
            showinterface.showScore();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            if (sec < 10){
                counting.innerHTML = `TIME: ${"0" + min} : ${"0" + sec}`;
            }else {
                counting.innerHTML = `TIME: ${"0" + min} : ${sec}`;
            }
            
        }
    }, 1000)
}
timer();
