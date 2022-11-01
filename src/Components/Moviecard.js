import "./Moviecard.css";

const Moviecard = ({ title, year, director, duration, genre, rate }) => {
  return (<div className="moviecard">
  <h1>{title}</h1>
  <p>{year}</p>
  <p>{director}</p>
  <p>{duration}</p>
  <ul>
    {genre.map((genreElement, index) => (
      <li key={index}>{genreElement}</li>
    ))}
  </ul>
  <p>{rate}</p>
</div>)
  ;
};

export default Moviecard;
