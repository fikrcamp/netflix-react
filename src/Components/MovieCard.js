
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
     {/* rating star and rating value  */}
      <p>⭐{props.Movies.show.rating.average }</p>
     {/* movie genress */}
      <p>  {props.Movies.show.genres} </p>
      <button 
      // official site  button
      href={props.Movies.show.officialSite} className="btn">Official Site
      </button>
    </div>
  );
}

export default MovieCard