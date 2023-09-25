/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../components/ui/Loading";
import SwalMessage from "../components/ui/SweetAlerts";
import { useUploadImageMutation } from "../redux/api/uploadImageApi";
import { useCreateBookMutation } from "../redux/features/Books/bookApi";
import { CreateBookResponse } from "../types/book-type";
import { ImageInfo } from "../types/imgbb-types";
import { FormDataType } from "../types/react-hook-form";

export default function AddNewBook() {
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  console.log("ashikur");
  const { register, handleSubmit, reset } = useForm<FormDataType>();

  const [createBook, { isLoading }] = useCreateBookMutation();

  const [uploadImage] = useUploadImageMutation();

  const handleUploadedImage = (e: React.FormEvent<HTMLInputElement>) => {
    const inputElement = e.target as HTMLInputElement;
    const files = inputElement.files;

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateBook = handleSubmit(async (data) => {
    const { bookImage } = data;

    const formData = new FormData();
    formData.append("image", (bookImage as string)[0]);

    try {
      const result = await uploadImage(formData);

      if ("data" in result) {
        console.log(result);
        const imgbbResponse = result.data.data as ImageInfo; // Cast the data to ImgbbResponse type

        data.bookImage = imgbbResponse.image?.url;

        reset();
      }
    } catch (error) {
      console.log(error);
    }

    try {
      const result = await createBook({
        ...data,
        createdBy: "64d4352df6cd315ae1be9c37",
      });

      if (result) {
        if ("data" in result) {
          const finalResults = result.data as CreateBookResponse;
          SwalMessage("success", finalResults.message as string);
        }
        setSelectedImage(null);
      }
    } catch (error) {
      SwalMessage("error", "Book create failed!");
    }
  });

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row w-full py-16 items-center">
        {selectedImage ? (
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full h-[40rem] object-cover object-center rounded border border-gray-200"
            src={selectedImage && (selectedImage as string)}
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
            <h1 className="text-5xl font-bold">Add New Book</h1>

            <form className="space-y-6" onSubmit={handleCreateBook}>
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
                      onChange={handleUploadedImage}
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
                  Save
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
