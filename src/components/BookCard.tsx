import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
    
  return (
    <>
      <div className="card card-side bg-base-100 drop-shadow-jg shadow shadow-blue-500/40 hover:shadow-indigo-500/40">
        <figure>
          <img
            // src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            src={
              book?.bookImage
                ? book?.bookImage
                : "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            }
            className="h-80"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book?.title}</h2>
          <p className="grow-0"> Author: {book?.author} </p>
          <p className="text-base grow-0"> {book?.genre} </p>
          <p className="text-sm grow-0"> {book?.publicationDate} </p>
          <div className="card-actions justify-end mt-auto">
            <Link to={`/book-details/${book?._id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
