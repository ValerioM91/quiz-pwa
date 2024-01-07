import { useState } from "react"
import { CATEGORIES, type CategoryId, DIFFICULTIES, type Difficulty } from "../utils/constants"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/Select"
import Label from "../components/Label"
import Main from "../components/Main"
import Link from "../components/Link"
import { cn } from "../utils/cn"
import InstallationTooltip from "../components/InstallationTooltip"

const StartScreen = () => {
  const [category, setCategory] = useState<CategoryId>(CATEGORIES[0]["id"])
  const [amount, setAmount] = useState(10)
  const [selectOpen, setSelectOpen] = useState(false)
  const [difficulty, setDifficulty] = useState<Difficulty>(DIFFICULTIES[0])

  return (
    <Main>
      <form className="grid w-full max-w-md gap-6 rounded-lg bg-white p-10">
        <h2 className="text-indigo11 text-center text-xl font-bold leading-none md:text-2xl">Choose your quiz</h2>

        <div className="flex flex-col gap-2">
          <Label htmlFor="category">Select a category</Label>
          <Select
            name="category"
            value={category.toString()}
            onValueChange={val => setCategory(+val as CategoryId)}
            onOpenChange={open => setSelectOpen(open)}
          >
            <SelectTrigger id="category" className="capitalize">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent style={{ width: "var(--radix-select-trigger-width)" }}>
              {CATEGORIES.map(category => (
                <SelectItem key={category.id} value={category.id.toString()} className="capitalize">
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="difficulty">Select a difficulty</Label>
          <Select
            name="difficulty"
            value={difficulty}
            onValueChange={(difficulty: Difficulty) => setDifficulty(difficulty)}
            onOpenChange={open => setSelectOpen(open)}
          >
            <SelectTrigger id="difficulty" className="capitalize">
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              {DIFFICULTIES.map(difficulty => (
                <SelectItem key={difficulty} value={difficulty} className="capitalize">
                  {difficulty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="amount">Number of questions</Label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="text-indigo9 data-[placeholder]:text-indigo9 inline-flex h-12 w-full items-center justify-between gap-1 rounded-md border bg-white px-3 py-2 text-sm leading-none transition-all hover:bg-mauve3 focus:bg-white"
            min={1}
            max={20}
            value={amount}
            onChange={e => setAmount(+e.target.value)}
          />
        </div>

        <Link
          to="/game"
          variant="indigo"
          search={{ amount: 10, category, difficulty: "easy" }}
          className={cn(selectOpen ? "pointer-events-none" : "pointer-events-auto")}
        >
          Start!
        </Link>
      </form>

      <InstallationTooltip />
    </Main>
  )
}

export default StartScreen
