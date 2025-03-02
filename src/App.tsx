import { Route, Routes } from "react-router"
import "./index.scss"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      </Routes>
    </>
  )
}

export default App
