import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLogInMutation } from "../redux/features/auth/authApi";
import { userAuthInfo } from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { ILoginUserApiResponse } from "../types/user-types";

export interface ILogin {
  email: string;
  password: string;
}

// Define types for the error message object
interface ErrorMessage {
  path: string;
  message: string;
}

// Define the main response object type
interface ApiResponse {
  success: boolean;
  message: string;
  errorMessages?: ErrorMessage[];
  stack?: string;
}

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<ILogin>();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  console.log(auth, "from auth default storage");

  const [logIn] = useLogInMutation();

  const loginHandler = handleSubmit(async (data) => {
    try {
      const result = await logIn(data);

      if ("data" in result) {
        const { data, message, success } = result.data as ILoginUserApiResponse;
        if (success) {
          dispatch(
            userAuthInfo({
              isLoggedIn: success,
              accessToken: data.accessToken,
              userInfo: data.userInfo,
            })
          );
          toast.success(message);
          reset();
          navigate("/");
        }
      } else {
        if ("data" in result.error) {
          const mess = result.error.data as ApiResponse;
          toast.error(mess.message);
        }
      }
    } catch (err) {
      console.log(err, "from login");
    }
  });

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={loginHandler}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  {...register("email")}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  {...register("password")}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
