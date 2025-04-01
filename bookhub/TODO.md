# BOOKHUB

- convert the card to horizontal list
- and when clicked it collapses the book
- add a search bar to search for books


iimport Book from "../model/Book";
import useWatchlist from "../Hooks/useWatchlist";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { useReducer} from "react";


export const Card = ({ book }: { book: Book }) => {
	
	const { watchlist, setWatchlist } = useWatchlist();

	function reducer(state: { bookmarked: boolean }, action: { type: string }) {
		 return {
			bookmarked: !(state.bookmarked)
		 }
	}

	const [state, dispatch] = useReducer(reducer, {bookmarked: watchlist.some(item => item.key === book.key)}); // Initialize based on watchlist!
   
    const handleBookmarkClick = () => {
        dispatch({ type: state.bookmarked ? "remove-bookmark" : "bookmark" });

        if (!state.bookmarked) {
            setWatchlist([...watchlist, book]);
        } else {
            setWatchlist((prev) => prev.filter((item) => item.key !== book.key));
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
				className="my-2 text-3xl text-blue-900 hover:text-blue-700 transition-colors duration-300"
				onClick={handleBookmarkClick}
			>
				{ state.bookmarked ? <IoBookmark /> : <IoBookmarkOutline />}
			</button>
		</div>
	);
};


```js
import { ReactNode, useState } from "react";
import { WatchlistContext  } from "./WatchlistContext";
import Book from "../model/Book";

interface WatchlistProviderProps {
	children: ReactNode;
}

export const WatchlistProvider = ({ children }: WatchlistProviderProps) => {
	const [watchlist, setWatchlist] = useState<Book[]>([]);

	return (
		<WatchlistContext.Provider value={{ watchlist, setWatchlist }}>
			{children}
		</WatchlistContext.Provider>
	);
};

```

```javascript
import Book from "../model/Book";
import useWatchlist from "../Hooks/useWatchlist";
import { useReducer } from "react";

function reducer(state: { bookmarked: boolean }, action: { type: string }) {
	return {
		bookmarked: !state.bookmarked,
	};
}

export const Card = ({ book }: { book: Book }) => {
	const { watchlist, setWatchlist } = useWatchlist();

	const [state, dispatch] = useReducer(reducer, {
		bookmarked: watchlist.some((item) => item.key === book.key),
	});

	const handleClick = () => {
		dispatch({ type: state.bookmarked ? "remove-bookmark" : "bookmark" });

		if (!state.bookmarked) setWatchlist(() => [...watchlist, book]);
		else
			setWatchlist((prev) =>
				prev.filter((item) => item.key !== book.key)
			);
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
				{state.bookmarked ? "Remove from saved" : "Save book"}
			</button>
		</div>
	);
};

```