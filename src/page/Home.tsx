import BookCard from "../components/BookCard";
import HeroSlider from "../components/HeroSlider";
import { useGetBooksQuery } from "../redux/features/Books/bookApi";
import { IBook } from "../types/book-type";

export default function Home() {
  const { data } = useGetBooksQuery({
    searchTerm: "",
    genre: "",
    publicationYear: "",
  });

  return (
    <>
      <HeroSlider />
      <div className="container mx-auto my-12">
        <p className="text-2xl md:text-3xl font-bold ml-3">Recent Books</p>
        <div className="py-8 grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 justify-center">
          {data?.data?.map((book: IBook, index: number) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}
