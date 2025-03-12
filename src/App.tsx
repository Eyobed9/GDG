import { Routes, Route, Link } from "react-router-dom";
import About from "./Components/About";
import { Contact } from "./Components/Contact";
import { Home } from "./Components/Home";
import NotFound from "./Components/NotFound";
import UserProfile from "./Components/UserProfile";
import useTheme from "./Hooks/useTheme";
import useAuth from "./Hooks/useAuth";
import {BsSun, BsMoonStars} from "react-icons/bs";
import { useEffect, useRef } from "react";

function App() {
	const { theme, setTheme } = useTheme();
	const { loggedIn, setLoggedIn} = useAuth();

	const authBtnRef = useRef<HTMLButtonElement>(null);

	const body = document.body;

	const handleAuthBtnClick = () => {
		setLoggedIn(!loggedIn);
	}

	useEffect(() => {
		if (theme === "light") {
			body.classList.add("bg-white", "text-gray-900");
			body.classList.remove("bg-gray-900", "text-white");
		} else {
			body.classList.add("bg-gray-900", "text-white");
			body.classList.remove("bg-white", "text-gray-900");
		}
		if (authBtnRef.current) {
			authBtnRef.current.textContent = !loggedIn ? "Log in" : "Logout";
		}
	}, [theme, loggedIn]);

	return (
		<div>
			<nav className="flex justify-center mt-4 space-x-10">
				<Link className="links" to="/">
					Home
				</Link>
				<Link className="links" to="/contact">
					Contact
				</Link>
				<Link className="links" to="/about">
					About
				</Link>
				<Link className="links" to="/profile/1">
					Profile
				</Link>
				<button
					onClick={handleAuthBtnClick}
					ref={authBtnRef}
				>
					Log in
				</button>
				<button
					onClick={() =>
						setTheme(theme == "light" ? "dark" : "light")
					}
				>{theme === "light" ? <BsMoonStars/> : <BsSun/>}
				</button>
			</nav>
			<div className="flex m-50 justify-center place-items-center">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/About" element={<About />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/Profile/:id" element={<UserProfile />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
