import { Link } from "react-router-dom";

export default function Navber() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1 navbar-start">
          <a className="btn btn-ghost normal-case text-xl">Book Shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-books">All Books</Link>
            </li>
            <li>
              <Link to="/create-book">Add New Book</Link>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="flex-none gap-2 navbar-end">
          <Link to="/login">
            <button className="btn btn-sm btn-primary">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-sm btn-secondary">Signup</button>
          </Link>
          <Link to="/">
            <button className="btn btn-sm btn-accent">Logout</button>
          </Link>
        </div>
      </div>
    </>
  );
}
