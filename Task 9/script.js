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
    this.isBudgetWasExpensive = favoriteMovieBudget > moreThanMovieBudget ? alert("true") : alert("false");
};

const moreThanMovieBudget = 100_000_000;
const favoriteMovieBudget = +prompt("Enter Your favorite movie budget, $", 120_000_000);
const favoriteMovieTitle = prompt("Enter Your favorite movie title", "Titanik");
const favoriteMovieDirector = prompt("Enter Your favorite movie director", "James Cameron");
const favorietMovie = new Movie(favoriteMovieTitle, favoriteMovieDirector, favoriteMovieBudget);