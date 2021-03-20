import React from 'react'
import { ButtonWrapper, Wrapper } from './QuestionCard.styles'

type Props = ({
    question: string,
    answers: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: any,
    questionNumber: number,
    totalQuestions: number,
    setGameOver: any
})

const QuestionCard:  React.FC<Props> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestions, setGameOver }) => {
    const handleClick = () => {
        setGameOver(true)
    }

    return (
        <Wrapper>
            <div>
                <p className = 'number'>
                    Question: {questionNumber} / {totalQuestions}
                </p>
                <p dangerouslySetInnerHTML = {{ __html: question }} />
                <div>
                    {answers.map((answer) => (
                        <ButtonWrapper
                        key={answer}
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                        >
                        <div key = {answer}>
                            <button disabled = {userAnswer ? true : false} value = {answer} onClick = {callback} >
                                <span dangerouslySetInnerHTML = {{ __html: answer }}></span>
                            </button>
                        </div>
                        </ButtonWrapper>
                    ))}
                </div>
                {questionNumber === totalQuestions && userAnswer ? <button className = 'btn' onClick = {handleClick}> Play Again? </button>: null}
            </div>
        </Wrapper>
    )
}

export default QuestionCard
