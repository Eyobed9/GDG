import { Routes, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Watchlist from "./Components/Watchlist";
import { ApiLearn } from "./Components/apiLearn";
import NotFound from "./Components/NotFound";
import useTheme from "./Hooks/useTheme";
import {BsSun, BsMoonStars} from "react-icons/bs";
import { useEffect } from "react";

function App() {
	const { theme, setTheme } = useTheme();

	const body = document.body;

	useEffect(() => {
		if (theme === "light") {
			body.classList.add("bg-grey-100", "text-gray-900");
			body.classList.remove("bg-gray-900", "text-white");
		} else {
			body.classList.add("bg-gray-900", "text-white");
			body.classList.remove("bg-grey-100", "text-gray-900");
		}
	}, [theme]);

	return (
		<div>
			<nav className="flex justify-center pt-4 space-x-10 ">
				<Link className="links text-lg" to="/">
					Home
				</Link>
				<Link className="links text-lg" to="/bookmarked">
					Saved books
				</Link>
				<Link className="links text-lg" to="/about">
					About
				</Link>
				<button className="text-lg"
					onClick={() =>
						setTheme(theme == "light" ? "dark" : "light")
					}
				>{theme === "light" ? <BsMoonStars/> : <BsSun/>}
				</button>
			</nav>
			<div className="flex m-6 justify-center place-items-center">
				<Routes>
					<Route path="/" element={<ApiLearn />} />
          			<Route path="/bookmarked" element={<Watchlist />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
