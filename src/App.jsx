import { StrictMode, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Books from "./components/Books";
import MainLayout from "./MainLayout";
import ListedBooks from './components/ListedBooks';
import PagesToRead from './components/PagesToRead';
import BookDetails from './components/BookDetails';
import NotFound from './components/NotFound';

const App = () => {
  const [readBooks, setReadBooks] = useState([]);

  const handleaddToRead = (book) => {
    setReadBooks((prevBooks) => [...prevBooks, book]);
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
          element: <ListedBooks readBooks={readBooks}/>,
        },
        {
          path: "pages-to-read",
          element: <PagesToRead />,
        },
        {
          path: "bookdetails/:bookId",
          element: <BookDetails handleaddToRead={handleaddToRead} />,
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
    </StrictMode>
  );
};

export default App;
