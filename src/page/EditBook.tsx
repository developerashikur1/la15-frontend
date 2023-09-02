import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Loading from "../components/ui/Loading";
import { useGetSingleBookQuery } from "../redux/features/Books/bookApi";
import { FormDataType } from "../types/react-hook-form";

export default function EditBook() {
  const { editBookId } = useParams();
  const [bookImg, setBookImg] = useState("");

  const {
    register,
    // setValue,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm<Partial<FormDataType>>();

  const { data: bookData, isLoading } = useGetSingleBookQuery(
    editBookId as string
  );
  //   console.log(data);
  const { statusCode, data } = bookData
    ? bookData
    : { statusCode: "", data: {} };

  useEffect(() => {
    if (statusCode === 200) {
      setValue("title", data?.title);
      setValue("genre", data?.genre);
      setValue("author", data?.author);
      setValue("publicationDate", data?.publicationDate);
      setValue("bookImage", data?.bookImage);
      setValue("description", data?.description);
      // setValue("createdBy", data?.createdBy)

      setBookImg(data?.bookImage);
    }
  }, [statusCode]);

  const handleUpdateBook = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row w-full py-16">
        {bookImg ? (
          <img
            src={bookImg}
            className=" xs:max-w-xs sm:max-w-sm rounded-lg shadow-2xl"
          />
        ) : (
          <div
            role="status"
            className="xs:max-w-xs sm:max-w-sm rounded-lg flex  animate-pulse items-center justify-center w-full h-60 bg-gray-300 rounded sm:w-96 dark:bg-gray-700"
          >
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        )}
        <div className="w-full">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-md">
            <h1 className="text-5xl font-bold">Edit Book</h1>

            <form className="space-y-6" onSubmit={handleUpdateBook}>
              <div className="mt-10 grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-6">
                <div className="sm:col-span-12">
                  <div className="mt-2">
                    <input
                      type="text"
                      required
                      id="title"
                      autoComplete="given-name"
                      placeholder="Book Title"
                      className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...register("title")}
                    />
                  </div>
                </div>

                <div className="sm:col-span-12">
                  <div className="mt-2">
                    <input
                      type="text"
                      required
                      id="genre"
                      placeholder="Book Genre"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...register("genre")}
                    />
                  </div>
                </div>

                <div className="sm:col-span-12">
                  <div className="mt-2">
                    <input
                      type="text"
                      required
                      id="author"
                      placeholder="Books Author"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...register("author")}
                    />
                  </div>
                </div>

                <div className="sm:col-span-12">
                  <div className="mt-2">
                    <input
                      type="date"
                      required
                      id="last-name"
                      placeholder="Publication Date"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...register("publicationDate")}
                    />
                  </div>
                </div>

                <div className="sm:col-span-12">
                  <div className="mt-2">
                    <input
                      type="file"
                      accept="image/*"
                      className="file-input file-input-bordered w-full"
                      {...register("bookImage")}
                      //   onChange={handleUploadedImage}
                    />
                  </div>
                </div>

                <div className="sm:col-span-12">
                  <div className="mt-2">
                    <textarea
                      id="message"
                      rows={6}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write Books Description..."
                      {...register("description")}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
}
