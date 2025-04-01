import { Card } from "./Card";
import useWatchlist from "../Hooks/useWatchlist";
import Book from "../model/Book";

export default function Watchlist() {
	
    const { watchlist } = useWatchlist();
	
	return (
		<div className="flex flex-col items-center min-h-screen">
			<h1>Saved books</h1>
			<div className="flex flex-row flex-wrap gap-10 justify-center items-center mx-auto w-3/4 my-3">
				{watchlist.map((book: Book, index:number) => (
					<Card book={book} key={index}/>
				))}
			</div>
		</div>
	);
}
