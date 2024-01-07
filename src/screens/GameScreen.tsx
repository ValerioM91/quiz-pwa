import { type QuestionsResponseSchema } from "../utils/schemas"

import ErrorScreen from "./ErrorScreen"
import Game from "../components/Game"

const GameScreen = ({ response }: { response?: QuestionsResponseSchema }) => {
  if (!response?.results || response.results.length === 0) {
    return <ErrorScreen />
  }

  return <Game questions={response.results} />
}
export default GameScreen
