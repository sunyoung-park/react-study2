import { useEffect, useState } from "react";
import Slider from "react-slick"; // react-slick import
import MainBannerMovie from "../components/MainBannerMovie";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../css/MainBanner.module.css';

function MainBanner() {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (
            await fetch(
                'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=download_count&limit=5&year=2024'
            )
        ).json();
        setMovies(json.data.movies);
    };

    useEffect(() => {
        getMovies();
    }, []);

    // react-slick 설정
    const settings = {
        dots: true,  // 슬라이드 아래의 점(dot) 네비게이션
        infinite: true,  // 무한 슬라이드
        speed: 500,  // 슬라이드 속도
        slidesToShow: 1,  // 한번에 한 슬라이드만 보여줌
        slidesToScroll: 1,  // 한번에 한 슬라이드씩 넘김
        autoplay: true,  // 자동 슬라이드
        autoplaySpeed: 3000,  // 3초마다 슬라이드 전환
    };

    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings}>
                {movies.map((movie) => (
                    <MainBannerMovie
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image}
                        background_image={movie.background_image}
                        title_long={movie.title_long}
                        description_intro={movie.description_intro}
                        rating={movie.rating}
                        runtime={movie.runtime}
                    />
                ))}
            </Slider>
        </div>
    );
}

export default MainBanner;