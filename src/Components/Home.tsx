import { useNavigate } from "react-router-dom";

export const Home = () => {
	const navigate = useNavigate();
	const welcomeMessage = "Welcome to our website!";

	return (
		<>
			<h1>{welcomeMessage}</h1>
			<button id="contactBtn" onClick={() => navigate("/contact")}>
				Contact us
			</button>
		</>
	);
};
