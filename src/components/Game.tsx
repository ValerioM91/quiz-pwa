import { useState } from "react"
import { type QuestionsResponseSchema } from "../utils/schemas"
import useGame from "../utils/useGame"
import { HomeIcon } from "@radix-ui/react-icons"

import Main from "./Main"
import Button from "./Button"
import Results from "./Results"
import Link from "./Link"

const Game = ({ questions }: { questions: QuestionsResponseSchema["results"] }) => {
  const {
    answer,
    checkAnswer,
    choices,
    correctAnswers,
    currentQuestionIndex,
    isAnswered,
    nextQuestionHandler,
    question,
    isLastQuestion,
  } = useGame(questions)

  const [showResults, setShowResults] = useState(false)

  if (showResults) {
    return <Results correctPercentage={+((correctAnswers / questions.length) * 100).toFixed(0)} />
  }

  return (
    <Main>
      <section className="grid w-full max-w-md rounded-lg bg-white">
        <div className="flex min-h-[420px] flex-col border-b-2 p-6 pb-6 sm:p-10 sm:pb-6">
          <div className="mb-4 flex items-center justify-between">
            <Link to="/" search={{}} variant="light" size="icon" aria-label="Go Back" className="text-3xl">
              <HomeIcon height={20} width={20} />
            </Link>

            <span className="text-xs">
              Correct answers: {correctAnswers}/{currentQuestionIndex + 1}
            </span>
          </div>

          <h2
            className="mb-4 grow text-lg font-medium leading-tight"
            dangerouslySetInnerHTML={{ __html: question.question }}
          />

          <div className="grid gap-4">
            {choices.map((choice, index) => (
              <Button
                key={index}
                variant={!!answer && choice === question.correct_answer ? "green" : choice === answer ? "red" : "gray"}
                className="p-4"
                disabled={isAnswered}
                onClick={() => checkAnswer(choice)}
                dangerouslySetInnerHTML={{ __html: choice }}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center px-6 py-6 sm:px-10">
          {isLastQuestion ? (
            <Button className="w-full capitalize" onClick={() => setShowResults(true)}>
              Show Results
            </Button>
          ) : (
            <Button className="w-full capitalize" onClick={nextQuestionHandler}>
              next question
            </Button>
          )}
        </div>
      </section>
    </Main>
  )
}
export default Game
