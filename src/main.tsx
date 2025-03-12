import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./Hooks/ThemeProvider";
import "./index.css";
import App from "./App.tsx";
import { UserAuthProvider } from "./Hooks/UserAuthProvider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Router>
			<ThemeProvider>
				<UserAuthProvider>
					<App />
				</UserAuthProvider>
			</ThemeProvider>
		</Router>
	</StrictMode>
);
