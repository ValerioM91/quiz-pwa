import Link from "../components/Link"
import Main from "../components/Main"

const ErrorScreen = () => {
  return (
    <Main>
      <div className="flex max-w-md flex-col justify-center gap-10 rounded-lg bg-white p-10 text-center">
        <p>No questions found for selected options. Please try again with a different combination.</p>
        <Link to="/" search={{}}>
          Choose your quiz
        </Link>
      </div>
    </Main>
  )
}
export default ErrorScreen
