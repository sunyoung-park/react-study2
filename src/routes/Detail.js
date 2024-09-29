import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import TopBar from "../components/TopBar";
import MoveBanner from "../components/MoveBanner";

function Detail() {
    
    const [loading, setLoading] = useState(true);    
    const [movie, setMovie] = useState();
    const {id} = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            console.log(json);
            setMovie(json.data.movie);
            setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, [id]);
    console.log(movie);
    return (<div>
        {loading ? (
            <h1>Loading...</h1>
            ) : ( 
                <div>
                    <TopBar />
                    <div>
                        {movie && (
                        <MovieDetail 
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image} 
                            title_long={movie.title_long} 
                            description_intro={movie.description_intro}
                            genres={movie.genres}
                            rating={movie.rating}
                            runtime={movie.runtime}
                            synopsis={movie.synopsis}
                            background_image={movie.background_image}                        />
                    )}
                    </div>
                    <MoveBanner />
                </div>
                
            )}
    
    </div>
    );
}

export default Detail;