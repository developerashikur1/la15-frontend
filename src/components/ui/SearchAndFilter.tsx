import { useState } from "react";
import { useGetBookFindOptionsQuery } from "../../redux/features/Books/bookApi";
import { searchAndFilter } from "../../redux/features/Books/bookSlice";
import { useAppDispatch } from "../../redux/hook";
import Loading from "./Loading";

export default function SearchAndFilter() {
  const [searchText, setSearchText] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [publicationYear, setPublicationYear] = useState<string>("");
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetBookFindOptionsQuery(undefined);

  const handleSearch = () => {
    // dispatch search data
    dispatch(
      searchAndFilter({
        searchTerm: searchText,
        genre: genre === "genre" ? "" : genre,
        publicationYear:
          publicationYear === "Publication Year" ? "" : publicationYear,
      })
    );
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mx-auto p-3 flex justify-end ">
          <div className="join">
            <div>
              <div className="w-[18rem]">
                <input
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="input input-bordered join-item w-full"
                  placeholder="Search with title, author, genre"
                />
              </div>
            </div>
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="select select-bordered join-item select-input"
            >
              <option selected>Genre</option>
              {data?.data?.genre?.map((item: string, index: number) => (
                <option key={index}>{item}</option>
              ))}
            </select>
            <select
              value={publicationYear}
              onChange={(e) => setPublicationYear(e.target.value)}
              className="select select-bordered join-item select-input"
            >
              <option selected>Publication Year</option>
              {data?.data?.publicationYears?.map(
                (item: string, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </select>
            <div className="indicator">
              <button onClick={handleSearch} className="btn join-item">
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
