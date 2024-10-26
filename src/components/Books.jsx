import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Hero from "./Hero";
import { useNavigate } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/Books.json")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  const handleCardClick = (book) => {
    navigate(`/bookdetails/${book.bookId}`); // Navigate to the book details page
  };

  return (
    <>
      <Hero></Hero>

      <div className="container mx-auto">
        <h1 className=" text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">
          Books {books.length}
        </h1>
        <div className="grid grid-cols-3 gap-3 my-5">
          {/* card 1 */}
          {books.map((book) => (
            <div
              onClick={() => handleCardClick(book)}
              key={book.bookId}
              className="card bg-base-100 border shadow-xl cursor-pointer"
            >
              <figure className="px-4 pt-5">
                <img
                  src={book.image}
                  alt={book.bookName}
                  className="rounded-xl h-64 w-full object-cover"
                />
              </figure>
              <div className="card-body pb-0">
                <div className="flex gap-6 text-green-400">
                  {book.tags.map((tag, index) => (
                    <h2 key={index} className="card-title">
                      {`#${tag}`}
                    </h2>
                  ))}
                </div>
                <p className="text-2xl font-semibold">{book.bookName}</p>
                <p className="text-lg font-semibold">By : {book.author}</p>
                <div className="flex justify-between my-4 border-t-2 border-dashed py-4">
                  <p>{book.category}</p>
                  <div className="flex gap-2 items-center">
                    <p>{book.rating.toFixed(2)}</p>
                    <FaStar className="text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Books;
