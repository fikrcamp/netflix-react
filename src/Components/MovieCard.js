

function MovieCard(props) {

  return (
    <div className="movie-card">
      <div className="movie-image">
        <img
          src={props.Movies.show.image.medium}
          alt="movie"
        />
      </div>

      <h3 className="movie-heading">{props.Movies.show.name}</h3>
      <p>⭐{props.Movies.show.rating.average}</p>
      <p>{props.Movies.show.language}</p>
      <button href={props.Movies.show.officialSite} className="btn">Official Site</button>
    </div>
  );
}

export default MovieCard;
