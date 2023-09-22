import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userAuthInfo } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hook";

export default function Navber() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogout = () => {
    navigate("/login");
    dispatch(
      userAuthInfo({
        isLoggedIn: false,
        userInfo: null,
        accessToken: null,
      })
    );
  };

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
            {isLoggedIn && (
              <li>
                <Link to="/create-book">Add New Book</Link>
              </li>
            )}
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="flex-none gap-2 navbar-end">
          {!isLoggedIn ? (
            <>
              <Link to="/login">
                <button className="btn btn-sm btn-primary">Login</button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-sm btn-secondary">Signup</button>
              </Link>
            </>
          ) : (
            <button onClick={handleLogout} className="btn btn-sm btn-accent">
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
}
