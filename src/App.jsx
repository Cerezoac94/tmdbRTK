import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Newest from "./pages/Newest";
import TopRated from "./pages/TopRated";
import MovieDetail from "./pages/MovieDetail";


function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/movies/popular" element={<Popular/>} />
				<Route path="/movies/newest" element={<Newest/>} />
				<Route path="/movies/top-rated" element={<TopRated/>} />
				<Route path="/movie/:movie_id" element={<MovieDetail/>} />

			</Routes>
		</>
	);
}

export default App;
