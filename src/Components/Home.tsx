import { useNavigate } from "react-router-dom";

export const Home = () => {
	const navigate = useNavigate();
	const welcomeMessage = "Welcome to our website!";

	return (
		<div>
			<h1>{welcomeMessage}</h1>
			<p className="mb-2">This is a website made for GDG project.</p>
			<button className="p-2 bg-blue-600 rounded-md text-white" onClick={() => navigate("/contact")}>
				Contact us
			</button>
		</div>
	);
};
