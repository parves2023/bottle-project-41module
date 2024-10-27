import { StrictMode, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Books from "./components/Books";
import MainLayout from "./MainLayout";
import ListedBooks from './components/ListedBooks';
import PagesToRead from './components/PagesToRead';
import BookDetails from './components/BookDetails';
import NotFound from './components/NotFound';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/About";
import Contact from "./components/Contact";


const App = () => {
  const [readBooks, setReadBooks] = useState(() => {
    const storedReadBooks = JSON.parse(localStorage.getItem("readBooks"));
    return storedReadBooks || [];
  });

  const [wishBooks, setwishBooks] = useState(() => {
    const storedWishBooks = JSON.parse(localStorage.getItem("wishBooks"));
    return storedWishBooks || [];
  });

  const allBooks = [...readBooks, ...wishBooks];

  useEffect(() => {
    localStorage.setItem("readBooks", JSON.stringify(readBooks));
  }, [readBooks]);

  useEffect(() => {
    localStorage.setItem("wishBooks", JSON.stringify(wishBooks));
  }, [wishBooks]);

  const handleaddToRead = (book) => {
    const bookExists = readBooks.some((b) => b.bookId === book.bookId);
    const bookOnWishlist = wishBooks.some((b) => b.bookId === book.bookId);
    if (bookExists) {
      toast.error("Book is already in the read list.");
    } else if (bookOnWishlist) {
      toast.error("Book removed from Wishlist!");
      setwishBooks((prevBooks) => prevBooks.filter((b) => b.bookId !== book.bookId));
      setReadBooks((prevBooks) => [...prevBooks, book]);
      toast.success("Book added to Read! ");
    } else {
      setReadBooks((prevBooks) => [...prevBooks, book]);
      toast.success("Book added to Read! ");
    }
  };

  const handleAddToWishList = (book) => {
    const bookExistsOnWish = wishBooks.some((b) => b.bookId === book.bookId);
    const bookExistsOnRead = readBooks.some((b) => b.bookId === book.bookId);

    if (bookExistsOnWish) {
      toast.error("Book is already in the wishlist!");
    } else {
      if (bookExistsOnRead) {
        toast.info("This book is already in the read list.");
      } else {
        setwishBooks((prevBooks) => [...prevBooks, book]);
        toast.success("Book added to wishlist!");
      }
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Books />,
        },
        {
          path: "listed-book",
          element: <ListedBooks readBooks={readBooks} wishBooks={wishBooks} />,
        },
        {
          path: "pages-to-read",
          element: <PagesToRead allBooks={allBooks} />,
        },
        {
          path: "bookdetails/:bookId",
          element: <BookDetails handleaddToRead={handleaddToRead} handleAddToWishList={handleAddToWishList} />,
        },
        {
          path: "about", // New route for About
          element: <About />,
        },
        {
          path: "contact", // New route for Contact
          element: <Contact />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  

  return (
    <StrictMode>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={2000} />
    </StrictMode>
  );
};

export default App;
