import { useEffect, useState } from "react";
import TopBar from '../components/TopBar';
import Movie from "../components/Movie";
import MainBanner from "../components/MainBanner";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await(
        await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=download_count')
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
                        <div>
                            {movies.map((movie) => (
                            <Movie 
                                key={movie.id}
                                id={movie.id}
                                coverImg={movie.medium_cover_image} 
                                title_long={movie.title_long} 
                                summary={movie.summary}
                                genres={movie.genres}
                            />
                            ))}
                        </div>
                    </div>
                    
                )}
        
        </div>
    );
}

export default Home;