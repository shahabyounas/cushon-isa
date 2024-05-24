import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom"
import AppLayout from './app/hoc/layout/appLayout'
import HomePage from "./app/pages/homepage"
import './App.css'
import IndependentISAPage from "./app/pages/independentISAPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/independent-isa',
    element: <IndependentISAPage />
  }
])
function App() {

  return (
    <AppLayout>
      <RouterProvider router={router} />
    </AppLayout>
  )
}

export default App
