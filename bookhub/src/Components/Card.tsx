import { useMemo } from "react";
import useWatchlist from "../Hooks/useWatchlist";
import Book from "../model/Book";

export const Card = ({ book }: { book: Book }) => {
	const { watchlist, dispatch } = useWatchlist();

	const isBookmarked = useMemo(
		() => Boolean(watchlist.find((b) => b["key"] === book["key"])),
		[watchlist]
	);

	const handleClick = () => {
		if (isBookmarked) {
			dispatch({ type: "DELETE", payload: { key: book["key"] } });
		} else {
			dispatch({ type: "ADD", payload: { book } });
		}
	};

	return (
		<div className="border-2 border-blue-900 rounded-2xl p-4 cursor-pointer flex flex-col justify-between items-center h-100 w-60 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
			<h3 className="text-center text-xl text-blue-900 font-semibold mb-2">
				{book["title"]}
			</h3>
			<img
				src={`https://covers.openlibrary.org/b/id/${book["cover_i"]}-M.jpg`}
				className="max-h-60 max-w-50 rounded-lg mb-4"
				alt="Cover"
			/>
			<button
				className="my-2 dark:text-black dark:hover:text-yellow-400 text-lg transition-colors duration-300"
				onClick={handleClick}
			>
				{isBookmarked ? "Remove from saved" : "Save book"}
			</button>
		</div>
	);
};
