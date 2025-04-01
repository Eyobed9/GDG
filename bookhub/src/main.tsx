import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./Hooks/ThemeProvider";
import "./index.css";
import App from "./App.tsx";
import { WatchlistProvider } from "./Hooks/WatchlistProvider.tsx";
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Router>
			<ThemeProvider>
				<WatchlistProvider>
					<App />
				</WatchlistProvider>
			</ThemeProvider>
		</Router>
	</StrictMode>
);
