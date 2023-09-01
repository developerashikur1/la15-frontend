import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Loading from "../components/ui/Loading";
import AddNewBook from "../page/AddNewBook";
import AllBooks from "../page/AllBooks";
import BookDetails from "../page/BookDetails";
import EditBook from "../page/EditBook";
import ErrorPage from "../page/error-page";
import Home from "../page/Home";
import Login from "../page/Login";
import Signup from "../page/Signup";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "all-books",
        element: <AllBooks />,
      },
      {
        path: "book-details/:bookId",
        element: <BookDetails />,
      },
      {
        path: "create-book",
        element: <AddNewBook />,
      },
      {
        path: "edit-book/:editBookId",
        element: <EditBook />,
      },
      {
        path: "loading",
        element: <Loading />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default routes;
