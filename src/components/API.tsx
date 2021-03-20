import { shuffleArray } from './utils'

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    type: string;
    question: string;
    incorrect_answers: string[];
} 

export type QuestionState = Question& {
    answers: string[];
}

export const fetchQuizQuestions = async (amount:number, difficulty:string, category:number) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple&category=${category}`
    try {
        const response = await fetch(endpoint)
        const data = await response.json()
        return data.results.map((question: Question) => (
            {
                ...question,
                answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
            }
        ))
    } catch (error) {
        console.log(error)
    }
   
}