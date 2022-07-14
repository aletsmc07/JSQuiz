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

