import { Route, Routes } from "react-router"
import "./index.scss"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Shop from "./pages/Shop"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/shop" element={<MainLayout><Shop /></MainLayout>} />
      </Routes>
    </>
  )
}

export default App
