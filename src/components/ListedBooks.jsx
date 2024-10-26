import { IoIosArrowDown } from "react-icons/io";

function ListedBooks({readBooks}) {
  return (
    <div className="container mx-auto">
        <div className="py-5 bg-slate-200 my-3 rounded-lg">
            <h1 className="text-xl text-center font-bold">Listed Books</h1>
        </div>
        <div className="flex items-center justify-center">
        <div className="flex gap-3 btn btn-success">
            <button>Sort By </button>
            <IoIosArrowDown />
            </div>
        </div>


        <div className="flex gap-3">
            <button className="btn btn-outline">Read Books</button>
            <button className="btn btn-outline">WishList Books</button>
        </div>

        <hr className="my-4 border-gray-300 dark:border-gray-700" />

        <div>
         

        {/* dinamic */}
        <div className="container mx-auto mt-5">
      {readBooks.length === 0 ? (
        <p>No books added to the read list yet.</p>
      ) : (
        readBooks.map((book, index) => (
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
                <p><span className="font-bold">By</span>: {book.author}</p>

                <div className="flex gap-3">
                  <p className="font-bold">Tags:</p>
                  {book.tags.map((tag, tagIndex) => (
                    <p key={tagIndex} className="text-green-400">#{tag}</p>
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
                  <button className="px-6 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-blue-600">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))
      )}
    </div>
      </div>
        
    </div>
  )
}

export default ListedBooks