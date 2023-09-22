import { useEffect } from "react";
import BookCard from "../components/BookCard";
import Loading from "../components/ui/Loading";
import SearchAndFilter from "../components/ui/SearchAndFilter";
import SwalMessage from "../components/ui/SweetAlerts";
import { useGetBooksQuery } from "../redux/features/Books/bookApi";
import { useAppSelector } from "../redux/hook";
import { IBook } from "../types/book-type";

export default function AllBooks() {
  const bookSearchFilterOptions = useAppSelector((state) => state.book);

  const { data, isLoading, isSuccess } = useGetBooksQuery(
    bookSearchFilterOptions
  );

  useEffect(() => {
    if (isSuccess) {
      SwalMessage("success", data.message);
    }
  }, [isSuccess]);

  console.log("got book data after search", data);
  return (
    <div className="py-16">
      <SearchAndFilter />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mx-auto my-12">
          {data?.data?.length === 0 ? (
            <div className="container mx-auto my-[15rem]">
              <h3 className="text-center">Book Not Found</h3>
            </div>
          ) : (
            <div className="py-8 grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 justify-center">
              {data?.data?.map((book: IBook, index: number) => (
                <BookCard key={index} book={book} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
