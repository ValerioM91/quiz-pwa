import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "@fontsource-variable/inter"
import { Outlet, RouterProvider, Router, Route, RootRoute } from "@tanstack/react-router"
import { Toaster } from "react-hot-toast"

import StartScreen from "./screens/StartScreen"
import GameScreen from "./screens/GameScreen"
import { quizParamsSchema } from "./utils/schemas"
import { fetchQuestionsRequest } from "./utils/fetchQuestions"

const rootRoute = new RootRoute({
  component: () => (
    <>
      <Outlet />
      <Toaster position="top-center" />
    </>
  ),
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: StartScreen,
})

const gameRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "game",
  validateSearch: quizParamsSchema,
  loaderDeps: ({ search: { amount, category, difficulty } }) => ({ amount, category, difficulty }),
  loader: ({ deps }) => fetchQuestionsRequest(deps),
  component: () => {
    const response = gameRoute.useLoaderData()
    return <GameScreen response={response} />
  },
  gcTime: 0,
})

const routeTree = rootRoute.addChildren([indexRoute, gameRoute])

const router = new Router({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById("root")!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)

  root.render(<RouterProvider router={router} />)
}
