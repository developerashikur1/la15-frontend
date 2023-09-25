import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSignOutMutation } from "../redux/features/auth/authApi";
import { userAuthInfo } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hook";

export default function Navber() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const [signOut] = useSignOutMutation();

  const dispatch = useDispatch();

  const handleLogout = () => {
    navigate("/login");
    signOut(undefined);
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
            {isLoggedIn && (
              <li>
                <Link to="/my-list">My List</Link>
              </li>
            )}
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
            <div className="drawer drawer-end w-[80px]">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content " title="Your List">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary py-0 h-[2rem] min-h-[2rem]"><i className="fa-solid fa-list"></i></label>
                </div> 
                <div className="drawer-side z-[1200]">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>

      </div>
    </>
  );
}
