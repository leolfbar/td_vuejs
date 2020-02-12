import Movies from './components/Movies.vue';
import MovieDetails from './components/MovieDetails.vue';


const routes = [
    { path: '/', component: Movies, name: 'movies' },
    { path: '/details/:id', component: MovieDetails, name: 'movie_details' },
];

export default routes;