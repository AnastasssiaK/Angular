import {environment} from "../../environments/environment";

const {API} = environment;

export const urls = {
  movie: `${API}/movie`,
  movies: `${API}/discover/movie`,
  genres: `${API}/genre/movie/list`
}

