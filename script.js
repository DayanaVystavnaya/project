let number0films = prompt('how much films you watched?');
let personalMovieDB = {
    count: number0films,
    movies: {},
    actors: {},
    genres: [],
    privat: false

 };

// let lastMovie = prompt("Which is the last movie you watched?");
// let rateMovie = prompt("how do you rate it?");
// let movies = {
//     lastMoviewatched: lastMovie,
//     rateMoviewatched: rateMovie
// };
// console.log(movies);

const a = prompt("Which is the last movie you watched?",""), 
      b = prompt("how do you rate it?",''),
      c = prompt('Which is the last movie you watched?',""),
      d = prompt("how do you rate it?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);