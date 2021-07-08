import starWars from '@functions/starWars';
import { movieFindOne, movieFind, movieCreate }  from '@functions/movies';

export default {
    movieFindOne, // Movie - FindById
    movieFind, // Movie - Find
    movieCreate, // Movie - Create
    starWars // API swapi
}
