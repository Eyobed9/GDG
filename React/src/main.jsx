import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Counter from "./components/counter/Counter.jsx";
import Card from "./components/card/Card.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="mainWrap">
      <Counter />
      <Card name="Habib Elias" email="habib234@gmail.com" age="20" bg="#1a1a1a" />
    </div>
  </StrictMode>
);
