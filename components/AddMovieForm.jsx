// Gör så att komponenten körs på klienten
'use client';

import { useState } from 'react';

// Formulär för att lägga till en ny film
export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('0');

  // Funktion som körs när formuläret skickas
  function handleSubmit(e) {
    e.preventDefault();
    // Kolla att titel och betyg är ifyllda
    if (title.trim() === '' || rating === '0') {
      alert('Du måste ange både titel och betyg för filmen!');
      return;
    }

    // Skickar ny film till föräldrakomponenten
    onAddMovie({ title: title.trim(), rating: Number(rating) });
    // Rensar formuläret
    setTitle('');
    setRating('0');
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Lägg till en film</legend>

        {/* Skriva in titel */}
        <label htmlFor="title-field" className="form-label">Titel:</label>
        <input
          type="text"
          id="title-field"
          className="form-control mb-3"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        {/* Välja betyg */}
        <label htmlFor="rating-field" className="form-label">Betyg:</label>
        <select
          id="rating-field"
          className="form-select mb-3"
          value={rating}
          onChange={e => setRating(e.target.value)}
        >
          <option value="0">Välj betyg här...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        {/* Knapp för att sparar filmen */}
        <button type="submit" className="btn btn-success">Spara film</button>
      </fieldset>
    </form>
  );
}