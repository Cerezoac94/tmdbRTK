import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Newest from "./pages/Newest";
import TopRated from "./pages/TopRated";


function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/popular" element={<Popular/>} />
				<Route path="/newest" element={<Newest/>} />
				<Route path="/top-rated" element={<TopRated/>} />
			</Routes>
		</>
	);
}

export default App;
