function MovieCard(props) {
  const genres = props.data.show.genres.join(' | ')
  return (
    <div className="movie-card">
      <div className="movie-image">
      <img src={props.data.show.image?.medium}/> 
      </div>
      <h3 className="movie-heading">{props.data.show.name}</h3>
      <div className="movie-rating">⭐{props.data.show.rating.average || 'N/A'}</div>
      <h5 className="movie-genre">{genres}</h5>
      <h5 className="schedule-movie">{props.data.show.schedule.time},{props.data.show.schedule.days}</h5>
      <button className="site-url"><a href={props.data.show.url}>Official Site</a></button>
      
    </div>
  );
}

export default MovieCard;
