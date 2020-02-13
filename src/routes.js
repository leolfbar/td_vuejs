import Movies from './components/Movies.vue';
import MovieDetails from './components/MovieDetails.vue';
import EditMovie from './components/EditMovie.vue';


const routes = [
    { path: '/', component: Movies, name: 'movies' },
    { path: '/details/:id', component: MovieDetails, name: 'movie_details' },
    { path: '/edit/:id', component: EditMovie, name: 'edit_movie' },
];

export default routes;