import type { QuestionSchema } from "./schemas"

export const randomizeChoices = (question: QuestionSchema) => {
  const answers = [question.correct_answer, ...question.incorrect_answers]
  const randomIndex = Math.floor(Math.random() * 4)
  ;[answers[randomIndex], answers[0]] = [answers[0], answers[randomIndex]]
  return answers
}
