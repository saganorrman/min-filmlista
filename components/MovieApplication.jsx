// Gör så att komponenten körs på klienten
'use client';

import { useState } from 'react';
import Movies from './Movies';
import AddMovieForm from './AddMovieForm';
import OrderByAlphaButton from './OrderByAlphaButton';
import OrderByGradeButton from './OrderByGradeButton';

// Huvudkomponent för filmappen
export default function MovieApplication() {
  const [movies, setMovies] = useState([]);

  // Lägg till film i listan
  function addMovie(movie) {
    setMovies(prev => [...prev, movie]);
  }

  // Ta bort film via index
  function deleteMovie(index) {
    setMovies(prev => prev.filter((_, i) => i !== index));
  }

  // Sortera filmer alfabetiskt
  function sortByAlpha() {
    const sorted = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sorted);
  }

  // Sortera filmer efter betyg (högst först)
  function sortByGrade() {
    const sorted = [...movies].sort((a, b) => b.rating - a.rating);
    setMovies(sorted);
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Min filmlista</h1>
      <AddMovieForm onAddMovie={addMovie} />
      <hr />
      <h2>Filmer</h2>
      <Movies movies={movies} onDeleteMovie={deleteMovie} />

      {/* Knappar för sortering */}
      <div className="mt-3">
        <OrderByAlphaButton onClick={sortByAlpha} />
        <OrderByGradeButton onClick={sortByGrade} />
      </div>
    </div>
  );
}