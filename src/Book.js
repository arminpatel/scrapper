const Book = ({ imageUrl, title, author, rating }) => {
  return (
    <div>
      <h1> {title} </h1>
      <img alt={title} src={imageUrl} />
      <h2> Author: {author} </h2>
      <p> {rating} </p>
    </div>
  );
};

export default Book;
