import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from '../css/MainBanner.module.css';

function MainBannerMovie({ id, coverImg, title_long, description_intro, background_image, rating, runtime }) {
    return (
        <div 
            className={styles.banner} 
            style={{ backgroundImage: `url(${background_image})` }} 
        >
            <div className={styles.banner__content}>
                <div className={styles.banner__text}>
                    <h1 className={styles.banner__title}>{title_long}</h1>
                    <p>{runtime}min ⭐{rating}</p>
                    <p className={styles.banner__description}>{description_intro}</p>
                    <Link to={`/movie/${id}`} className={styles.banner__button}>View More</Link>
                </div>
                <img src={coverImg} alt={title_long} className={styles.banner__image} />
            </div>
        </div>
    );
}

MainBannerMovie.propTypes = {
    id: PropTypes.number.isRequired,
    background_image: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    title_long: PropTypes.string.isRequired,
    description_intro: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime:PropTypes.number.isRequired
};

export default MainBannerMovie;