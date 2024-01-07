import type { CATEGORIES, DIFFICULTIES } from "./constants"
import { questionsResponseSchema } from "./schemas"

export type FetchQuestionsArgs = {
  amount: number
  category: (typeof CATEGORIES)[number]["id"]
  difficulty: (typeof DIFFICULTIES)[number]
}

export const fetchQuestionsRequest = async ({ amount, category, difficulty }: FetchQuestionsArgs) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
  const response = await fetch(url)
  if (!response.ok) return
  const data = await response.json()
  if (!data) return
  const parsedData = questionsResponseSchema.parse(data)

  return parsedData
}
