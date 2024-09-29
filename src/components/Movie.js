import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from '../css/Movie.module.css'; 

function Movie({id, coverImg, title, title_long, summary, genres, description_intro, rating, runtime}) {
    return (
      <Link to={`/movie/${id}`}>
      <div className={styles.movie}>
          <img src={coverImg} alt={title} />
          <h2>{title_long}</h2>            
          <p>{runtime} min ⭐ {rating}</p>
          
          <ul>
            {genres && genres.length > 0 ? (
              genres.slice(0, 3).map((g) => <li key={g}>{g}</li>) 
            ) : (
              <li></li>
            )}
          </ul>
      </div>
      </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    title_long: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    description_intro: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
    runtime:PropTypes.number.isRequired
}

export default Movie;