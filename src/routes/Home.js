import { useEffect, useState } from "react";
import TopBar from '../components/TopBar';
import Movie from "../components/Movie";
import MainBanner from "../components/MainBanner";
import styles from '../css/Movie.module.css'; 
import MoveBanner from "../components/MoveBanner";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await(
        await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=download_count&limit=24')
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
                ) : ( 
                    <div>
                        <TopBar />
                        <MainBanner />
                        <div className={styles.movies__container}>
                            {movies.map((movie) => (
                            <Movie 
                                key={movie.id}
                                id={movie.id}
                                coverImg={movie.medium_cover_image} 
                                title_long={movie.title_long} 
                                summary={movie.summary}
                                genres={movie.genres}
                                rating={movie.rating}
                                runtime={movie.runtime }
                            />
                            ))}
                        </div>
                        <MoveBanner />
                    </div>
                    
                )}
        
        </div>
    );
}

export default Home;