import Link from "./Link"
import Main from "./Main"

const Results = ({ correctPercentage }: { correctPercentage: number }) => {
  return (
    <Main>
      <section className="grid w-full max-w-md rounded-lg bg-white">
        <div className="flex flex-col justify-center gap-10 p-10 text-center">
          {correctPercentage < 60 && (
            <div>
              <h2 className="mb-2 text-xl font-bold">try again!</h2>
              <p>
                You answered only <strong>{correctPercentage}%</strong> of questions correctly!
              </p>
            </div>
          )}
          {correctPercentage >= 60 && (
            <div>
              <h2 className="mb-2 text-xl font-bold">Congrats!</h2>
              <p>
                You answered <strong>{correctPercentage}%</strong> of questions correctly!
              </p>
            </div>
          )}

          <Link to="/" search={{}}>
            Play again!
          </Link>
        </div>
      </section>
    </Main>
  )
}
export default Results
