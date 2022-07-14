import {Question} from  '../JS/Question.js';
import {data} from '../JS/dataQ.js';

export const realQues = data.map(question => new Question(question.questions, question.userOptions, question.answer))
