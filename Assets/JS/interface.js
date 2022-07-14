export class showInterface {
    constructor() {
    }

    showQ(text) {
        const questionText = document.getElementById('questions')
        questionText.innerText = text
    }

    showChoices(choices, callback) {
        const choicesCont = document.getElementById('userOptions');
        choicesCont.innerHTML = '';
        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement('button');
            button.innerText = choices[i];
            button.className = 'button';
            button.addEventListener('click', () => callback(choices[i]));
            choicesCont.append(button); 
        }
    }

    showScore(score) {
        const finalText = `
        <h2>FINAL SCORE</h2>
        <h3>Your score is: ${score}</h3>
        `
        const element = document.getElementById('quiz');
        element.innerHTML = finalText;
    }

    showProgress(currentQ, totalQ) {
        const prog = document.getElementById('numberQuestion');
        prog.innerHTML = `Question ${currentQ} of ${totalQ}`
    }
}