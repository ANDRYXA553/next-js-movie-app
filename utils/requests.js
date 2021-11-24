const API_KEY = process.env.API_KEY


export default {
    Trending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    TopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated/?api_key=${API_KEY}&language=en-US`
    },
    ActionMovies: {
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    ComedyMovies: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    HorrorMovies: {
        title: 'Horrors',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    RomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    MysteryMovies: {
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    SciFi: {
        title: 'SciFi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    Westerns: {
        title: 'Westerns',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    Animation: {
        title: 'Animations',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    TV: {
        title: 'TV',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
}