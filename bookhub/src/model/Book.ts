interface Book {
	author_key: string[]; // Array of author keys (OLIDs)
	author_name: string[]; // Array of author names
	cover_edition_key?: string; // Optional: Key for a specific edition's cover
	cover_i?: number; // Optional: Cover image ID
	first_publish_year?: number; // Optional: Year of first publication
	key: string; // Work Key (OLID), e.g., "/works/OL276798W"
	title: string; // Book Title
}

export default Book;