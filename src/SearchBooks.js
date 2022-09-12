import { useState, useEffect } from "react";
import scrape from "./scrape";

const SearchBooks = () => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    requestBooks();
  }, []);

  async function requestBooks(keyword) {
    const res = await scrape(keyword);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestBooks(query);
        }}
      >
        <label htmlFor="book">
          Search
          <input
            placeholder="Search Books"
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default SearchBooks;
