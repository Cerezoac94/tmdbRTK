import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Newest from "./pages/Newest";
import TopRated from "./pages/TopRated";
import MovieDetail from "./pages/MovieDetail";
import DashboardRoutes from "./pages/dashboard/DashboardRoutes";


function App() {
	return (
			<Routes>
				
				<Route element={<DashboardRoutes/>}> 
					<Route path="/" element={<Home/>} />
					<Route path="/movies/popular" element={<Popular/>} />
					<Route path="/movies/newest" element={<Newest/>} />
					<Route path="/movies/top-rated" element={<TopRated/>} />
					<Route path="/movie/:movie_id" element={<MovieDetail/>} />
				</Route>
				<Route path="/login" element={<h2>login</h2>} />

			</Routes>
			
	);
}

export default App;
