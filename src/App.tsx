import { Route, Routes } from "react-router"
import "./index.scss"
import Home from "./pages/Home"
import Header from "./components/Header/Header"

function App() {

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</>
	)
}

export default App
