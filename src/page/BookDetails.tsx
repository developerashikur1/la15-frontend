/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loading from "../components/ui/Loading";
import SwalMessage from "../components/ui/SweetAlerts";
import UserReviews from "../components/UserReviews";
import {
  useAddToWishListMutation,
  useGetUserProfileQuery,
} from "../redux/features/auth/authApi";
import { updateUserInfo } from "../redux/features/auth/authSlice";
import {
  useCommentOnBookMutation,
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../redux/features/Books/bookApi";
import { useAppDispatch } from "../redux/hook";
import { IBook, ISingleReviews } from "../types/book-type";

export default function BookDetails() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState("");

  const { data, isLoading } = useGetSingleBookQuery(bookId as string);
  const [deleteBook, result] = useDeleteBookMutation(undefined);
  const [commentOnBook] = useCommentOnBookMutation(undefined);
  const [addToWishList, { isSuccess }] = useAddToWishListMutation(undefined);
  const { data: profileData, isSuccess: profileSuccess } =
    useGetUserProfileQuery(undefined);
  const dispatch = useAppDispatch();
  const [wishlists, setWishlists] = useState<string[]>([]);

  useEffect(() => {
    if (profileSuccess) {
      if (profileData.statusCode === 200) {
        const updateData = profileData.data;
        dispatch(updateUserInfo(updateData));
        setWishlists(updateData?.wishlist?.map((i: IBook) => i._id));
      }
    }
  }, [profileData]);

  const book = data?.data;

  useEffect(() => {
    if (result?.status === "fulfilled") {
      SwalMessage("success", "Book Deleted Successfully");
      navigate("/");
    }
  }, [result?.status]);

  const reviewSubmitHandler = async () => {
    try {
      const commentOptions = {
        bookId: bookId as string,
        data: { review },
      };
      await commentOnBook(commentOptions);
      setReview("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddToWishList = async (payload: string) => {
    try {
      const data = {
        bookId: payload,
      };
      const result = await addToWishList(data);
      if (result) {
        toast.success("Add to wishlist successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteBook = (id: string) => {
    Swal.fire({
      title: "Do you want to delete this book?",
      showCancelButton: true,
      confirmButtonText: "Confirm",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteBook(id);
      } else if (result.isDismissed) {
        Swal.fire("Book delete canceled!", "", "info");
      }
    });
  };

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      {isLoading && <Loading />}
      {result?.isLoading && <Loading />}
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={book?.bookImage}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {book?.title}
            </h1>
            <h2 className="text-md title-font text-gray-500 tracking-widest">
              {book?.author}
            </h2>
            <h2 className="text-md title-font text-gray-500 tracking-widest">
              {book?.publicationDate}
            </h2>
            <h2 className="text-md title-font text-gray-600 font-medium tracking-widest">
              {book?.genre}
            </h2>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">
                  {book?.reviews?.length} Reviews
                </span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="flex mt-8">
              <Link to={`/edit-book/${bookId}`}>
                <button className="flex me-6 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Edit Book
                </button>
              </Link>
              <button
                onClick={() => handleDeleteBook(bookId as string)}
                className="flex  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              >
                Delete Book
              </button>
            </div>
            <div className="flex mt-8">
              {/* {userInfo?.wishlist?.includes(bookId as string) && */}
              <button
                disabled={isSuccess || wishlists.includes(bookId as string)}
                onClick={() => handleAddToWishList(bookId as string)}
                className={`flex me-6 text-white ${
                  wishlists?.includes(bookId as string)
                    ? "bg-gray-300"
                    : "bg-green-500"
                } border-0 py-2 px-6 focus:outline-none ${
                  wishlists?.includes(bookId as string) && "hover:bg-blue-600"
                } rounded`}
              >
                {wishlists?.includes(bookId as string)
                  ? "Already added wishlist"
                  : "Add to wishlist"}
              </button>
              {/* // } */}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container px-5 py-24 mx-auto">
        <p className="text-2xl mb-3">Leave a review</p>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write a reivew for this book..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <button
          onClick={reviewSubmitHandler}
          className="flex mt-3 text-black hover:text-white bg-green-300 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
        >
          Submit
        </button>
      </div>
      <hr />
      <br />
      <div className="container mx-auto p-6">
        <p className="text-2xl mb-4">Reviews: {book?.reviews?.length}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {book?.reviews.map((review: ISingleReviews, index: number) => (
            <UserReviews key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
