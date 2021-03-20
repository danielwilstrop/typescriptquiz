import React, { useState, useEffect } from 'react';
import { fetchQuizQuestions} from './components/API'
import QuestionCard from './components/QuestionCard'
import { QuestionState } from './components/API'
import { GlobalStyles, Wrapper } from './app.styles'
import axios from 'axios'

export type AnswerObject = {
  question: string;
  answer: string;
  correctAnswer: string;
  correct: boolean;
}

type CatObject = {
  id: number;
  name: string;
}

const NUMBERS = [5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25]


const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  const [category, setCategory] = useState<any>([])
  const [categories, setCategories] = useState<CatObject[]>([])
  const [totalQuestions, setTotalQuestions] = useState(5)
  const [difficulty, setDifficulty] = useState('easy')

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)
    const newQuestions = await fetchQuizQuestions(totalQuestions, difficulty, category)
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php')
    .then(res => {
      setCategories(res.data.trivia_categories)
      console.log(category)
      console.log(totalQuestions)
      console.log(difficulty)
    })
  }, [category, totalQuestions, difficulty])

 
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!gameOver) {
        const answer = e.currentTarget.value
        const correct = questions[number].correct_answer === answer
        if (correct) setScore(prev => prev +1)
        const answerObject = {
          question: questions[number].question,
          answer,
          correct,
          correctAnswer: questions[number].correct_answer
        }
        setUserAnswers(prev => [...prev, answerObject])
      }
  }

  const nextQuestion  = () => {
      const nextQuestion = number + 1
      // if (nextQuestion === totalQuestions) {
      //   setGameOver(true)
      // } else {
      //   setNumber(nextQuestion)
      // }
      setNumber(nextQuestion)
  }

  const handleChange = (event:any) => {
    setCategory(event.target.value)
  }

  const handleTotalQuestions = (event:any) => {
    setTotalQuestions(event.target.value)
  }

  const handleDifficulty = (event:any) => {
    setDifficulty(event.target.value)
  }

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <h1>Quiz Time!</h1>
        {gameOver  ? (
          <>
            <p className = 'text'> Choose a Category </p>
            <select onChange = {handleChange}> 
            {categories.map((category) => {
            return <option key = {category.id} value = {category.id}>{category.name}</option>
            })}
            </select>
            <p className = 'text'> How many Questions? </p>
            <select onChange = {handleTotalQuestions}>
            {NUMBERS.map((num) => {
                return <option key = {num} value = {num}> {num} Questions </option>
            })}
            </select>
            <p className = 'text'> How difficult? </p>
            <select onChange = {handleDifficulty}>
              <option value = 'easy'> Easy </option>
              <option value = 'medium'> Medium </option>
              <option value = 'hard'> Hard </option>
            </select>
            <button className='start' onClick={startTrivia}>
              Start
            </button>
          </>
        ) : null}
        {!gameOver ? <p className='score'>Score: {score}</p> : null}
        {loading ? <div className="lds-hourglass"></div> : null}
        {!loading && !gameOver && (
          <QuestionCard
            questionNumber={number + 1}
            totalQuestions={totalQuestions}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
            setGameOver = {setGameOver}
          />
        )}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== totalQuestions - 1 ? (
          <button className='next' onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
