import { useQuery } from "@apollo/client";

import { LIST_BOOKS } from "../../graphql/books";

interface Book {
  title: string;
  author: string;
}

function Home() {
  const { data, loading, error } = useQuery(LIST_BOOKS);
  if (loading) return <div>...Loading data</div>;
  if (error)
    return <div>Oops! There's was an error trying to find your data</div>;
  return (
    <div className="Home">
      {data.listBooks.map((book: Book) => (
        <li key={book.title}>
          {book.title} by {book.author}
        </li>
      ))}
    </div>
  );
}

export default Home;
