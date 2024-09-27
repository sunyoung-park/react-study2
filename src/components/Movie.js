import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres, description_intro}) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>
              <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <p>{description_intro}</p>
            <ul>
              {genres && genres.length > 0 ? (
                genres.map((g) => <li key={g}>{g}</li>)
              ) : (
                <li></li>
              )}
      </ul>
          </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    description_intro: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;