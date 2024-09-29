import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from '../css/MovieDetail.module.css'; 

function Movie({ id, coverImg, title, title_long, summary, background_image, genres, description_intro, rating, runtime, synopsis }) {
    return (
        <Link to={`/movie/${id}`}>
            <div className={styles['movie-container']}>
                <img className={styles['movie-background']} src={background_image} alt={title_long} />
                {/* 콘텐츠 */}
                <div className={styles['contents-background']}>
                    <div className={styles['movie-content']}>
                        <div className={styles['movie-image']}>
                            <img src={coverImg} alt={title} />
                        </div>
                        <div className={styles['movie-details']}>
                            <h2 className={styles['movie-title']}>{title_long}</h2>            
                            <p className={styles['movie-info']}>{runtime} min ⭐ {rating}</p>
                            <ul className={styles['movie-genres']}>
                                {genres && genres.length > 0 ? (
                                    genres.slice(0, 3).map((g) => <li key={g}>{g}</li>)
                                ) : (
                                    <li></li>
                                )}
                            </ul>
                            <p className={styles['movie-synopsis']}>{synopsis}</p>
                            <p className={styles['movie-description']}>{description_intro}</p>
                        </div>
                        
                    </div> 
                </div>
                               
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
    runtime: PropTypes.number.isRequired,
    synopsis: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired
};

export default Movie;