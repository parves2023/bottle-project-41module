import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

function BookDetails({handleaddToRead,handleAddToWishList}) {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch("/Books.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedBook = data.find((item) => item.bookId === parseInt(bookId));
        setBook(selectedBook);
      });
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <div>
        <section className="bg-gray-200 my-5 rounded-lg dark:bg-gray-900">
          <div className="grid max-w-screen-xl gap-4 px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="lg:mt-0 lg:col-span-6 lg:flex">
              <img src={book.image} alt={book.bookName} />
            </div>
            <div className="mr-auto place-self-center lg:col-span-6 md:ml-4">
              <h1 className="text-xl font-semibold">{book.bookName}</h1>
              <p><span className="font-bold">By</span>: {book.author}</p>
              <hr className="my-4 border-gray-300 dark:border-gray-700" />
              <p className="font-semibold"><span className="font-bold">Category:</span> {book.category}</p>
              <hr className="my-4 border-gray-300 dark:border-gray-700" />
              <p>
                <span className="font-bold">Review:</span> {book.review}
              </p>
              <div className="flex gap-3">
                <p className="font-bold">Tags:</p>
                {book.tags.map((tag, index) => (
                  <p key={index} className="text-green-400">#{tag}</p>
                ))}
              </div>
              <hr className="my-4 border-gray-300 dark:border-gray-700" />
              <div className="flex gap-3">
                <p>Number of Pages:</p>
                <p>{book.totalPages}</p>
              </div>
              <div className="flex gap-3">
                <p>Publisher:</p>
                <p>{book.publisher}</p>
              </div>
              <div className="flex gap-3">
                <p>Year of Publishing:</p>
                <p>{book.yearOfPublishing}</p>
              </div>
              <div className="flex gap-3">
                <p>Rating:</p>
                <div className="flex gap-1 items-center">
                  <p>{book.rating}</p>
                  <FaStar />
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <button onClick={()=> handleaddToRead(book)} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Read
                </button>
                <button onClick={()=> handleAddToWishList(book)} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BookDetails;
