import React from "react";
import BookCard from "../components/BookCard";
import SearchAndFilter from "../components/ui/SearchAndFilter";

const booksData = [
  {
    _id: 1,
    title: "Battles of Napoleon",
    author: "James",
    image:
      "https://dt-grasp.myshopify.com/cdn/shop/products/4_0f00e996-1d8d-4fee-86d5-4dbc7005763d.jpg?v=1665122973&width=1920",
    genre: "Historical",
    price: 160,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quibusdam nam. Magnam autem consectetur modi error, excepturi doloribus asperiores porro? Odio deleniti dolore temporibus vero dignissimos soluta enim nam excepturi, vel quisquam distinctio culpa totam dolor animi, hic sequi cupiditate error minima, nostrum autem! Incidunt culpa ducimus inventore consectetur soluta dolore expedita voluptatibus similique voluptates, eum beatae earum ut animi et aliquid impedit ullam consequatur laborum voluptatum aperiam adipisci exercitationem, voluptas dicta. Repellendus voluptatem labore quo accusamus cupiditate vitae rerum excepturi asperiores, harum quos rem veniam culpa ducimus commodi recusandae similique! Mollitia error doloribus a! Velit laborum dolore aut explicabo.",
    rating: 4.5,
    publicationDate: "10/09/1997",
  },
  {
    _id: 1,
    title: "Battles of Napoleon",
    author: "James",
    image:
      "https://dt-grasp.myshopify.com/cdn/shop/products/4_0f00e996-1d8d-4fee-86d5-4dbc7005763d.jpg?v=1665122973&width=1920",
    genre: "Historical",
    price: 160,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quibusdam nam. Magnam autem consectetur modi error, excepturi doloribus asperiores porro? Odio deleniti dolore temporibus vero dignissimos soluta enim nam excepturi, vel quisquam distinctio culpa totam dolor animi, hic sequi cupiditate error minima, nostrum autem! Incidunt culpa ducimus inventore consectetur soluta dolore expedita voluptatibus similique voluptates, eum beatae earum ut animi et aliquid impedit ullam consequatur laborum voluptatum aperiam adipisci exercitationem, voluptas dicta. Repellendus voluptatem labore quo accusamus cupiditate vitae rerum excepturi asperiores, harum quos rem veniam culpa ducimus commodi recusandae similique! Mollitia error doloribus a! Velit laborum dolore aut explicabo.",
    rating: 4.5,
    publicationDate: "10/09/1997",
  },
  {
    _id: 1,
    title: "Battles of Napoleon",
    author: "James",
    image:
      "https://dt-grasp.myshopify.com/cdn/shop/products/4_0f00e996-1d8d-4fee-86d5-4dbc7005763d.jpg?v=1665122973&width=1920",
    genre: "Historical",
    price: 160,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quibusdam nam. Magnam autem consectetur modi error, excepturi doloribus asperiores porro? Odio deleniti dolore temporibus vero dignissimos soluta enim nam excepturi, vel quisquam distinctio culpa totam dolor animi, hic sequi cupiditate error minima, nostrum autem! Incidunt culpa ducimus inventore consectetur soluta dolore expedita voluptatibus similique voluptates, eum beatae earum ut animi et aliquid impedit ullam consequatur laborum voluptatum aperiam adipisci exercitationem, voluptas dicta. Repellendus voluptatem labore quo accusamus cupiditate vitae rerum excepturi asperiores, harum quos rem veniam culpa ducimus commodi recusandae similique! Mollitia error doloribus a! Velit laborum dolore aut explicabo.",
    rating: 4.5,
    publicationDate: "10/09/1997",
  },
  {
    _id: 1,
    title: "Battles of Napoleon",
    author: "James",
    image:
      "https://dt-grasp.myshopify.com/cdn/shop/products/4_0f00e996-1d8d-4fee-86d5-4dbc7005763d.jpg?v=1665122973&width=1920",
    genre: "Historical",
    price: 160,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quibusdam nam. Magnam autem consectetur modi error, excepturi doloribus asperiores porro? Odio deleniti dolore temporibus vero dignissimos soluta enim nam excepturi, vel quisquam distinctio culpa totam dolor animi, hic sequi cupiditate error minima, nostrum autem! Incidunt culpa ducimus inventore consectetur soluta dolore expedita voluptatibus similique voluptates, eum beatae earum ut animi et aliquid impedit ullam consequatur laborum voluptatum aperiam adipisci exercitationem, voluptas dicta. Repellendus voluptatem labore quo accusamus cupiditate vitae rerum excepturi asperiores, harum quos rem veniam culpa ducimus commodi recusandae similique! Mollitia error doloribus a! Velit laborum dolore aut explicabo.",
    rating: 4.5,
    publicationDate: "10/09/1997",
  },
  {
    _id: 1,
    title: "Battles of Napoleon",
    author: "James",
    image:
      "https://dt-grasp.myshopify.com/cdn/shop/products/4_0f00e996-1d8d-4fee-86d5-4dbc7005763d.jpg?v=1665122973&width=1920",
    genre: "Historical",
    price: 160,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quibusdam nam. Magnam autem consectetur modi error, excepturi doloribus asperiores porro? Odio deleniti dolore temporibus vero dignissimos soluta enim nam excepturi, vel quisquam distinctio culpa totam dolor animi, hic sequi cupiditate error minima, nostrum autem! Incidunt culpa ducimus inventore consectetur soluta dolore expedita voluptatibus similique voluptates, eum beatae earum ut animi et aliquid impedit ullam consequatur laborum voluptatum aperiam adipisci exercitationem, voluptas dicta. Repellendus voluptatem labore quo accusamus cupiditate vitae rerum excepturi asperiores, harum quos rem veniam culpa ducimus commodi recusandae similique! Mollitia error doloribus a! Velit laborum dolore aut explicabo.",
    rating: 4.5,
    publicationDate: "10/09/1997",
  },
  {
    _id: 1,
    title: "Battles of Napoleon",
    author: "James",
    image:
      "https://dt-grasp.myshopify.com/cdn/shop/products/4_0f00e996-1d8d-4fee-86d5-4dbc7005763d.jpg?v=1665122973&width=1920",
    genre: "Historical",
    price: 160,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quibusdam nam. Magnam autem consectetur modi error, excepturi doloribus asperiores porro? Odio deleniti dolore temporibus vero dignissimos soluta enim nam excepturi, vel quisquam distinctio culpa totam dolor animi, hic sequi cupiditate error minima, nostrum autem! Incidunt culpa ducimus inventore consectetur soluta dolore expedita voluptatibus similique voluptates, eum beatae earum ut animi et aliquid impedit ullam consequatur laborum voluptatum aperiam adipisci exercitationem, voluptas dicta. Repellendus voluptatem labore quo accusamus cupiditate vitae rerum excepturi asperiores, harum quos rem veniam culpa ducimus commodi recusandae similique! Mollitia error doloribus a! Velit laborum dolore aut explicabo.",
    rating: 4.5,
    publicationDate: "10/09/1997",
  },
  {
    _id: 1,
    title: "Battles of Napoleon",
    author: "James",
    image:
      "https://dt-grasp.myshopify.com/cdn/shop/products/4_0f00e996-1d8d-4fee-86d5-4dbc7005763d.jpg?v=1665122973&width=1920",
    genre: "Historical",
    price: 160,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quibusdam nam. Magnam autem consectetur modi error, excepturi doloribus asperiores porro? Odio deleniti dolore temporibus vero dignissimos soluta enim nam excepturi, vel quisquam distinctio culpa totam dolor animi, hic sequi cupiditate error minima, nostrum autem! Incidunt culpa ducimus inventore consectetur soluta dolore expedita voluptatibus similique voluptates, eum beatae earum ut animi et aliquid impedit ullam consequatur laborum voluptatum aperiam adipisci exercitationem, voluptas dicta. Repellendus voluptatem labore quo accusamus cupiditate vitae rerum excepturi asperiores, harum quos rem veniam culpa ducimus commodi recusandae similique! Mollitia error doloribus a! Velit laborum dolore aut explicabo.",
    rating: 4.5,
    publicationDate: "10/09/1997",
  },
  {
    _id: 1,
    title: "Battles of Napoleon",
    author: "James",
    image:
      "https://dt-grasp.myshopify.com/cdn/shop/products/4_0f00e996-1d8d-4fee-86d5-4dbc7005763d.jpg?v=1665122973&width=1920",
    genre: "Historical",
    price: 160,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quibusdam nam. Magnam autem consectetur modi error, excepturi doloribus asperiores porro? Odio deleniti dolore temporibus vero dignissimos soluta enim nam excepturi, vel quisquam distinctio culpa totam dolor animi, hic sequi cupiditate error minima, nostrum autem! Incidunt culpa ducimus inventore consectetur soluta dolore expedita voluptatibus similique voluptates, eum beatae earum ut animi et aliquid impedit ullam consequatur laborum voluptatum aperiam adipisci exercitationem, voluptas dicta. Repellendus voluptatem labore quo accusamus cupiditate vitae rerum excepturi asperiores, harum quos rem veniam culpa ducimus commodi recusandae similique! Mollitia error doloribus a! Velit laborum dolore aut explicabo.",
    rating: 4.5,
    publicationDate: "10/09/1997",
  },
  {
    _id: 1,
    title: "Battles of Napoleon",
    author: "James",
    image:
      "https://dt-grasp.myshopify.com/cdn/shop/products/4_0f00e996-1d8d-4fee-86d5-4dbc7005763d.jpg?v=1665122973&width=1920",
    genre: "Historical",
    price: 160,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quibusdam nam. Magnam autem consectetur modi error, excepturi doloribus asperiores porro? Odio deleniti dolore temporibus vero dignissimos soluta enim nam excepturi, vel quisquam distinctio culpa totam dolor animi, hic sequi cupiditate error minima, nostrum autem! Incidunt culpa ducimus inventore consectetur soluta dolore expedita voluptatibus similique voluptates, eum beatae earum ut animi et aliquid impedit ullam consequatur laborum voluptatum aperiam adipisci exercitationem, voluptas dicta. Repellendus voluptatem labore quo accusamus cupiditate vitae rerum excepturi asperiores, harum quos rem veniam culpa ducimus commodi recusandae similique! Mollitia error doloribus a! Velit laborum dolore aut explicabo.",
    rating: 4.5,
    publicationDate: "10/09/1997",
  },
  {
    _id: 1,
    title: "Battles of Napoleon",
    author: "James",
    image:
      "https://dt-grasp.myshopify.com/cdn/shop/products/4_0f00e996-1d8d-4fee-86d5-4dbc7005763d.jpg?v=1665122973&width=1920",
    genre: "Historical",
    price: 160,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quibusdam nam. Magnam autem consectetur modi error, excepturi doloribus asperiores porro? Odio deleniti dolore temporibus vero dignissimos soluta enim nam excepturi, vel quisquam distinctio culpa totam dolor animi, hic sequi cupiditate error minima, nostrum autem! Incidunt culpa ducimus inventore consectetur soluta dolore expedita voluptatibus similique voluptates, eum beatae earum ut animi et aliquid impedit ullam consequatur laborum voluptatum aperiam adipisci exercitationem, voluptas dicta. Repellendus voluptatem labore quo accusamus cupiditate vitae rerum excepturi asperiores, harum quos rem veniam culpa ducimus commodi recusandae similique! Mollitia error doloribus a! Velit laborum dolore aut explicabo.",
    rating: 4.5,
    publicationDate: "10/09/1997",
  },
  {
    _id: 1,
    title: "Battles of Napoleon",
    author: "James",
    image:
      "https://dt-grasp.myshopify.com/cdn/shop/products/4_0f00e996-1d8d-4fee-86d5-4dbc7005763d.jpg?v=1665122973&width=1920",
    genre: "Historical",
    price: 160,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quibusdam nam. Magnam autem consectetur modi error, excepturi doloribus asperiores porro? Odio deleniti dolore temporibus vero dignissimos soluta enim nam excepturi, vel quisquam distinctio culpa totam dolor animi, hic sequi cupiditate error minima, nostrum autem! Incidunt culpa ducimus inventore consectetur soluta dolore expedita voluptatibus similique voluptates, eum beatae earum ut animi et aliquid impedit ullam consequatur laborum voluptatum aperiam adipisci exercitationem, voluptas dicta. Repellendus voluptatem labore quo accusamus cupiditate vitae rerum excepturi asperiores, harum quos rem veniam culpa ducimus commodi recusandae similique! Mollitia error doloribus a! Velit laborum dolore aut explicabo.",
    rating: 4.5,
    publicationDate: "10/09/1997",
  },
  {
    _id: 1,
    title: "Battles of Napoleon",
    author: "James",
    image:
      "https://dt-grasp.myshopify.com/cdn/shop/products/4_0f00e996-1d8d-4fee-86d5-4dbc7005763d.jpg?v=1665122973&width=1920",
    genre: "Historical",
    price: 160,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quibusdam nam. Magnam autem consectetur modi error, excepturi doloribus asperiores porro? Odio deleniti dolore temporibus vero dignissimos soluta enim nam excepturi, vel quisquam distinctio culpa totam dolor animi, hic sequi cupiditate error minima, nostrum autem! Incidunt culpa ducimus inventore consectetur soluta dolore expedita voluptatibus similique voluptates, eum beatae earum ut animi et aliquid impedit ullam consequatur laborum voluptatum aperiam adipisci exercitationem, voluptas dicta. Repellendus voluptatem labore quo accusamus cupiditate vitae rerum excepturi asperiores, harum quos rem veniam culpa ducimus commodi recusandae similique! Mollitia error doloribus a! Velit laborum dolore aut explicabo.",
    rating: 4.5,
    publicationDate: "10/09/1997",
  },
  {
    _id: 1,
    title: "Battles of Napoleon",
    author: "James",
    image:
      "https://dt-grasp.myshopify.com/cdn/shop/products/4_0f00e996-1d8d-4fee-86d5-4dbc7005763d.jpg?v=1665122973&width=1920",
    genre: "Historical",
    price: 160,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quibusdam nam. Magnam autem consectetur modi error, excepturi doloribus asperiores porro? Odio deleniti dolore temporibus vero dignissimos soluta enim nam excepturi, vel quisquam distinctio culpa totam dolor animi, hic sequi cupiditate error minima, nostrum autem! Incidunt culpa ducimus inventore consectetur soluta dolore expedita voluptatibus similique voluptates, eum beatae earum ut animi et aliquid impedit ullam consequatur laborum voluptatum aperiam adipisci exercitationem, voluptas dicta. Repellendus voluptatem labore quo accusamus cupiditate vitae rerum excepturi asperiores, harum quos rem veniam culpa ducimus commodi recusandae similique! Mollitia error doloribus a! Velit laborum dolore aut explicabo.",
    rating: 4.5,
    publicationDate: "10/09/1997",
  },
  {
    _id: 1,
    title: "Battles of Napoleon",
    author: "James",
    image:
      "https://dt-grasp.myshopify.com/cdn/shop/products/4_0f00e996-1d8d-4fee-86d5-4dbc7005763d.jpg?v=1665122973&width=1920",
    genre: "Historical",
    price: 160,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quibusdam nam. Magnam autem consectetur modi error, excepturi doloribus asperiores porro? Odio deleniti dolore temporibus vero dignissimos soluta enim nam excepturi, vel quisquam distinctio culpa totam dolor animi, hic sequi cupiditate error minima, nostrum autem! Incidunt culpa ducimus inventore consectetur soluta dolore expedita voluptatibus similique voluptates, eum beatae earum ut animi et aliquid impedit ullam consequatur laborum voluptatum aperiam adipisci exercitationem, voluptas dicta. Repellendus voluptatem labore quo accusamus cupiditate vitae rerum excepturi asperiores, harum quos rem veniam culpa ducimus commodi recusandae similique! Mollitia error doloribus a! Velit laborum dolore aut explicabo.",
    rating: 4.5,
    publicationDate: "10/09/1997",
  },
  {
    _id: 1,
    title: "Battles of Napoleon",
    author: "James",
    image:
      "https://dt-grasp.myshopify.com/cdn/shop/products/4_0f00e996-1d8d-4fee-86d5-4dbc7005763d.jpg?v=1665122973&width=1920",
    genre: "Historical",
    price: 160,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quibusdam nam. Magnam autem consectetur modi error, excepturi doloribus asperiores porro? Odio deleniti dolore temporibus vero dignissimos soluta enim nam excepturi, vel quisquam distinctio culpa totam dolor animi, hic sequi cupiditate error minima, nostrum autem! Incidunt culpa ducimus inventore consectetur soluta dolore expedita voluptatibus similique voluptates, eum beatae earum ut animi et aliquid impedit ullam consequatur laborum voluptatum aperiam adipisci exercitationem, voluptas dicta. Repellendus voluptatem labore quo accusamus cupiditate vitae rerum excepturi asperiores, harum quos rem veniam culpa ducimus commodi recusandae similique! Mollitia error doloribus a! Velit laborum dolore aut explicabo.",
    rating: 4.5,
    publicationDate: "10/09/1997",
  },
  {
    _id: 1,
    title: "Battles of Napoleon",
    author: "James",
    image:
      "https://dt-grasp.myshopify.com/cdn/shop/products/4_0f00e996-1d8d-4fee-86d5-4dbc7005763d.jpg?v=1665122973&width=1920",
    genre: "Historical",
    price: 160,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quibusdam nam. Magnam autem consectetur modi error, excepturi doloribus asperiores porro? Odio deleniti dolore temporibus vero dignissimos soluta enim nam excepturi, vel quisquam distinctio culpa totam dolor animi, hic sequi cupiditate error minima, nostrum autem! Incidunt culpa ducimus inventore consectetur soluta dolore expedita voluptatibus similique voluptates, eum beatae earum ut animi et aliquid impedit ullam consequatur laborum voluptatum aperiam adipisci exercitationem, voluptas dicta. Repellendus voluptatem labore quo accusamus cupiditate vitae rerum excepturi asperiores, harum quos rem veniam culpa ducimus commodi recusandae similique! Mollitia error doloribus a! Velit laborum dolore aut explicabo.",
    rating: 4.5,
    publicationDate: "10/09/1997",
  },
];

export default function AllBooks() {
    
  return (
    <div className="py-16">
      <SearchAndFilter />
      <div className="container mx-auto my-12">
        {/* <p className="text-2xl md:text-3xl font-bold ml-3">Recent Books</p> */}
        <div className="py-8 grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 justify-center">
          {booksData.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
