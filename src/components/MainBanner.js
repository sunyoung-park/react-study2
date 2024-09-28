import { useEffect, useState } from "react";
import Movie from "../components/MainBannerMovie";

function MainBanner() {
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await(
        await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=download_count&limit=5&year=2024'
        )
        ).json();
        setMovies(json.data.movies);
    }
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            <div>
                {movies.map((movie) => (
                <Movie 
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.coverImg}
                    background_image={movie.background_image} 
                    title_long={movie.title_long} 
                    description_intro={movie.description_intro}
                />
                ))}
            </div>
        
        </div>
    );

}
export default MainBanner;