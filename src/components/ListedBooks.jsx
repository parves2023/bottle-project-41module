import { useState } from "react";
import { useNavigate } from "react-router-dom";


function ListedBooks({ readBooks,wishBooks }) {
  const [sortCriterion, setSortCriterion] = useState("Rating");
  const [sortedReadBooks, setSortedReadBooks] = useState(readBooks);
  const [sortedWishBooks, setSortedWishBooks] = useState(wishBooks);
  
  const handleSortChange = (event) => {
    const criterion = event.target.value;
    setSortCriterion(criterion);
    let sortedArray;

    if (showList) {
      if (criterion === "Rating") {
        sortedArray = [...readBooks].sort((a, b) => b.rating - a.rating);
      } else if (criterion === "Pages") {
        sortedArray = [...readBooks].sort((a, b) => b.totalPages - a.totalPages);
      } else if (criterion === "Year") {
        sortedArray = [...readBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      }
      setSortedReadBooks(sortedArray);
    } else if (!showList) {
      if (criterion === "Rating") {
        sortedArray = [...wishBooks].sort((a, b) => b.rating - a.rating);
      } else if (criterion === "Pages") {
        sortedArray = [...wishBooks].sort((a, b) => b.totalPages - a.totalPages);
      } else if (criterion === "Year") {
        sortedArray = [...wishBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      }
      setSortedWishBooks(sortedArray);
    }
  };

  
  const navigate = useNavigate();
  const [showList, setshowList] = useState(true);
  const handleCardClick = (book) => {
    navigate(`/bookdetails/${book.bookId}`);
  };

  return (
    <div className="container mx-auto">
      <div className="py-5 bg-slate-200 my-3 rounded-lg">
        <h1 className="text-2xl text-center font-bold">Listed Books</h1>
        <h1 className="text-lg text-center font-semibold">Books that blows your mind</h1>
      </div>

      <div className="flex items-center justify-center my-3">
        <select
          value={sortCriterion}
          onChange={handleSortChange}
          className="btn btn-success px-4 py-2 text-white rounded"
        >
          <option value="Rating">Sort by Rating</option>
          <option value="Pages">Sort by Number of Pages</option>
          <option value="Year">Sort by Published Year</option>
        </select>
     
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setshowList(!showList)}
          className={`btn  ${showList ? "btn-neutral" : "btn-outline"}`}
        >
          Read Books
        </button>
        <button
          onClick={() => setshowList(!showList)}
          className={`btn ${!showList ? "btn-neutral" : "btn-outline"}`}
        >
          WishList Books
        </button>
      </div>

      <hr className="my-4 border-gray-300 dark:border-gray-700" />

      <div>
        {/* dinamic readBook list */}
        {showList ? <div className="container mx-auto mt-5">
          {sortedReadBooks.length === 0 ? (
            <p>No books added to the read list yet.</p>
          ) : (
            sortedReadBooks.map((book, index) => (
              <section key={index} className="border rounded-lg my-4">
                <div className="gap-4 p-2 flex flex-col md:flex-row items-center mx-auto">
                  <div className="bg-slate-200 rounded-md">
                    <img
                      src={book.image} // Use the image URL from the book object
                      alt={book.bookName} // Use the book name as alt text
                      className="size-36 p-1 object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h1 className="text-xl font-semibold">{book.bookName}</h1>
                    <p>
                      <span className="font-bold">By</span>: {book.author}
                    </p>

                    <div className="flex gap-3">
                      <p className="font-bold">Tags:</p>
                      {book.tags.map((tag, tagIndex) => (
                        <p key={tagIndex} className="text-green-400">
                          #{tag}
                        </p>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <div className="flex gap-3">
                        <p>Year of Publishing:</p>
                        <p>{book.yearOfPublishing}</p>
                      </div>

                      <div className="flex gap-3">
                        <p>Pages:</p>
                        <p>{book.totalPages}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <p>Publisher:</p>
                      <p>{book.publisher}</p>
                    </div>

                    <hr className="my-1 border-gray-300 dark:border-gray-700" />
                    <div className="flex gap-4">
                      <button className="px-6 py-2 bg-blue-300 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white">
                        Category: Classic
                      </button>
                      <button className="px-6 py-2 bg-green-300 text-green-600 font-bold rounded-lg hover:bg-green-600 hover:text-white">
                        Rating: {book.rating} {/* Display the rating */}
                      </button>
                      <button onClick={()=> handleCardClick(book)} className="px-6 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-blue-600">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            ))
          )}
        </div>: <div className="container mx-auto mt-5">
          {sortedWishBooks.length === 0 ? (
            <p>No books added to the wishList yet.</p>
          ) : (
            sortedWishBooks.map((book, index) => (
              <section key={index} className="border rounded-lg my-4">
                <div className="gap-4 p-2 flex flex-col md:flex-row items-center mx-auto">
                  <div className="bg-slate-200 rounded-md">
                    <img
                      src={book.image} // Use the image URL from the book object
                      alt={book.bookName} // Use the book name as alt text
                      className="size-36 p-1 object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h1 className="text-xl font-semibold">{book.bookName}</h1>
                    <p>
                      <span className="font-bold">By</span>: {book.author}
                    </p>

                    <div className="flex gap-3">
                      <p className="font-bold">Tags:</p>
                      {book.tags.map((tag, tagIndex) => (
                        <p key={tagIndex} className="text-green-400">
                          #{tag}
                        </p>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <div className="flex gap-3">
                        <p>Year of Publishing:</p>
                        <p>{book.yearOfPublishing}</p>
                      </div>

                      <div className="flex gap-3">
                        <p>Pages:</p>
                        <p>{book.totalPages}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <p>Publisher:</p>
                      <p>{book.publisher}</p>
                    </div>

                    <hr className="my-1 border-gray-300 dark:border-gray-700" />
                    <div className="flex gap-4">
                      <button className="px-6 py-2 bg-blue-300 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white">
                        Category: Classic
                      </button>
                      <button className="px-6 py-2 bg-green-300 text-green-600 font-bold rounded-lg hover:bg-green-600 hover:text-white">
                        Rating: {book.rating} {/* Display the rating */}
                      </button>
                      <button onClick={()=> handleCardClick(book)}  className="px-6 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-blue-600">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            ))
          )}
        </div>}



      </div>
    </div>
  );
}

export default ListedBooks;
