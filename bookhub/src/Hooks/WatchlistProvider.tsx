import { ReactNode, useReducer } from "react";
import Book from "../model/Book";
import { WatchlistContext } from "./WatchlistContext";

interface WatchlistProviderProps {
	children: ReactNode;
}

interface ADDBook {
	type: "ADD";
	payload: {
		book: Book;
	};
}

interface DeleteBook {
	type: "DELETE";
	payload: {
		key: string;
	};
}

export type watchlistAction = ADDBook | DeleteBook;

const watchlistReducer = (state: Book[], action: watchlistAction) => {
	switch (action.type) {
		case "ADD":
			return [...state, action.payload.book];
		case "DELETE":
			return state.filter((book) => book.key !== action.payload.key);

		default:
			return state;
	}
};

export const WatchlistProvider = ({ children }: WatchlistProviderProps) => {
	const [watchlist, dispatch] = useReducer(watchlistReducer, []);

	return (
		<WatchlistContext.Provider value={{ watchlist, dispatch }}>
			{children}
		</WatchlistContext.Provider>
	);
};
