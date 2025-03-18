import {
	useState,
	useReducer,
	useCallback,
	useMemo,
	useEffect,
	useRef,
} from "react";
import { BsClipboard, BsClipboardCheck } from "react-icons/bs";
import ReactDOMServer from "react-dom/server";

export const useCharacterCount = (charLimit:number) => {
	const [chars, setChars] = useState("");
	const [barWidth, setBarWidth] = useState("0%");
	const barRef = useRef<HTMLDivElement>(null);
	const clipBtn = useRef<HTMLButtonElement>(null);

	const EvaluateSize = useCallback((text: string) => {
		return (text.length * 100) / charLimit;
	},[charLimit]);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => {
			const newText = e.target.value;
			if (EvaluateSize(chars) <= 100) {
				setChars(newText);
			} else {
				setChars(newText.slice(0, 100));
			}
		},
		[]
	);

	const copyToClipboard = useCallback(() => {
		navigator.clipboard.writeText(chars);
		if (clipBtn.current) {
			clipBtn.current.innerHTML = ReactDOMServer.renderToString(
				<BsClipboardCheck className="fill-blue-600" />
			);
			const timeout = setTimeout(() => {
				if (clipBtn.current) {
					clipBtn.current.innerHTML = ReactDOMServer.renderToString(
						<BsClipboard />
					);
				}
			}, 1500);
			return () => clearTimeout(timeout);
		}
	}, [chars]);

	const result = useMemo(() => Math.round(EvaluateSize(chars)), [chars, EvaluateSize]);
	useEffect(() => {
		const e = barRef.current;
		if (e) {
			e.textContent = result + "%";
			setBarWidth(e.textContent);
			if (result >= 90) {
				e.classList.add("bg-red-600");
				e.classList.remove("bg-green-600", "bg-yellow-500");
			} else if (result >= 75 && result < 90) {
				e.classList.add("bg-yellow-500");
				e.classList.remove("bg-green-600", "bg-red-600");
			} else {
				e.classList.add("bg-green-600");
				e.classList.remove("bg-red-600", "bg-yellow-500");
			}
		}
	}, [result]);

	return {
		chars, 
		handleChange,
		barWidth,
		barRef, 
		clipBtn,
		copyToClipboard,
	};
};
