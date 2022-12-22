
import react, { useState } from "react"

function MovieCard(props) {
  // const [name, setName] = useState()
  // const [image, setImage] = useState()
  // setImage(props.data)

  // console.log(props.item)
  return (
    <div className="movie-card">
      <div className="movie-image">
        <img
          src={props.item.image.medium}
          alt="movie"
        />
      </div>
      <h3 className="movie-heading">{props.item.name}</h3>
    </div>
  );
}

export default MovieCard;
