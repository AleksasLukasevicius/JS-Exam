/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

function Movie(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    this.isBudgetWasExpensive = favoriteMovieBudget > moreThanMovieBudget
        ? alert(`true, ${favoriteMovieTitle} movie budget more than 100 000 000 mln USD $`)
        : alert(`false, ${favoriteMovieTitle} movie budget less than 100 000 000 mln USD $`);
};

const comparisonMovieBudget = 100_000_000;

const favoriteMovieTitle = prompt("Your favorite movie title", "Avatar");
const favoriteMovieDirector = prompt("Your favorite movie director", "James Cameron");
const favoriteMovieBudget = +prompt("Enter Your favorite movie budget, $", 237_000_000);

const favoriteMovie = new Movie(favoriteMovieTitle, favoriteMovieDirector, favoriteMovieBudget);