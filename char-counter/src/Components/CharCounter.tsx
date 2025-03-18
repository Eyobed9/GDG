import { useCharacterCount } from "../Hooks/useCharacterCount";
import { BsClipboard } from "react-icons/bs";
export const CharCounter = () => {
	const charLimit = 60;
	const { chars, handleChange, barWidth, barRef, clipBtn, copyToClipboard } =
		useCharacterCount(charLimit);

	return (
		<div className="flex flex-col justify-center place-items-center m-50">
			<h1 className="font-bold uppercase text-50 text-gray-600">
				Real-Time character counter
			</h1>
			<textarea
				value={chars}
				onChange={handleChange}
				className="border-2 border-gray-600 rounded-sm w-100 h-50 resize-none p-3 text-sm"
				maxLength={charLimit}
			></textarea>
			<div className="flex gap-2">
				<div className="mt-2 bg-transparent rounded-full dark:bg-gray-600 w-75 h-full">
					<div
						ref={barRef}
						className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
						style={{ width: barWidth != "0%" ? barWidth : "3%" }}
					></div>
				</div>
				<button
					ref={clipBtn}
					onClick={copyToClipboard}
					className="mt-2"
				>
				 <BsClipboard />
				</button>
			</div>
		</div>
	);
};
