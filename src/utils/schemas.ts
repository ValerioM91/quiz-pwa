import { z } from "zod"
import { CATEGORIES, type CategoryId, DIFFICULTIES } from "./constants"

const questionSchema = z.object({
  type: z.string(),
  difficulty: z.enum(DIFFICULTIES),
  category: z.string(),
  question: z.string(),
  correct_answer: z.string(),
  incorrect_answers: z.array(z.string()),
})
export type QuestionSchema = z.infer<typeof questionSchema>

export const questionsResponseSchema = z.object({
  response_code: z.number(),
  results: z.array(questionSchema),
})

export type QuestionsResponseSchema = z.infer<typeof questionsResponseSchema>

const categoryIds = CATEGORIES.map(category => category.id) as CategoryId[]

export const quizParamsSchema = z.object({
  difficulty: z.enum(DIFFICULTIES),
  category: z.custom<(typeof CATEGORIES)[number]["id"]>(val => categoryIds.some(cat => cat === val) || false),
  amount: z.number().min(1).max(20),
})
