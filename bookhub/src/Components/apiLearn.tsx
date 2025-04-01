import { useEffect, useState } from "react";
import Book from "../model/Book";
import { Card } from "./Card";

// import axios from 'axios'

export const ApiLearn = () => {
	const API_URL = "https://openlibrary.org/search.json?q=hello&&limit=33";
	const [books, setBooks] = useState([]);



	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => {
				setBooks(data.docs);
			});
	}, [books]);
	return (
		<div className="flex flex-col items-center min-h-screen">
			<h1 className="text-4xl m-8">BookHub</h1>
			<div className="flex flex-row flex-wrap gap-10 justify-center items-center mx-auto w-3/4 my-3">
				{books.map((book: Book, index:number) => (
					<Card book={book} key={index}/>
				))}
			</div>
		</div>
	);
};

// import {useState, useEffect, useMemo, useCallback } from 'react';

// function LiveSearch() {
//     const [query, setQuery] = useState('');
//     const [users, setUsers] = useState<{ name: string }[]>([]);

//     useEffect(()=> {
//         fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((data) => setUsers(data));

//     }, [])

//     const filteredUsers = useMemo(()=> users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase())),
//         [query, users]
// );

//     const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//         setQuery(e.target.value);
//     }, [])

//     return(
//         <div>
//             <h2>Live Search</h2>
//             <input className="border-2 border-blue-900 rounded-lg p-2" type="text" value={query} onChange={handleSearch}  placeholder="Search users"/>
//             <ul>
//                 {filteredUsers.map((user)=>(
//                     <li className='text-blue-900' key={user.name}>{user.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default LiveSearch;
