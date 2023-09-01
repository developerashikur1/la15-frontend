export default function SearchAndFilter() {
  return (
    <div className="container mx-auto p-3 flex justify-end">
      <div className="join">
        <div>
          <div>
            <input
              className="input input-bordered join-item w-full"
              placeholder="Search... title, author, genre"
            />
          </div>
        </div>
        <select className="select select-bordered join-item">
          <option disabled selected>
            Filter
          </option>
          <option>Sci-fi</option>
          <option>Drama</option>
          <option>Action</option>
        </select>
        <div className="indicator">
          <button className="btn join-item">Search</button>
        </div>
      </div>
    </div>
  );
}
