import { ActionDispatch, createContext } from 'react';
import Book from '../model/Book';
import { watchlistAction } from './WatchlistProvider';



interface WatchlistContextType {
    watchlist: Array<Book>;
    dispatch:ActionDispatch<[action: watchlistAction]>;
}

export const WatchlistContext = createContext<WatchlistContextType>({} as WatchlistContextType);