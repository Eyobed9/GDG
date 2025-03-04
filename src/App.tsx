import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./Components/About";
import { Contact } from "./Components/Contact";
import { Home } from "./Components/Home";
import NotFound  from "./Components/NotFound"
import UserProfile from "./Components/UserProfile";

function App() {
	return (
		<>
			<nav>
				<Link className="links" to="/">Home</Link>
				<Link className="links" to="/contact">Contact</Link>
				<Link className="links" to="/about">About</Link>
				<Link className="links" to="/profile/1">Profile</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/Profile/:id" element={<UserProfile/>} />
        		<Route path="*" element={<NotFound/>}/>
			</Routes>
		</>
	);
}

export default App;
