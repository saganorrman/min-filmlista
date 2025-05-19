// Gör så att komponenten körs på klienten
'use client';

// Visar en lista med filmer
export default function Movies({ movies, onDeleteMovie }) {
  // Om inge filmer finns, visas meddelandet
  if (movies.length === 0) {
    return <p>Inga filmer tillagda än.</p>;
  }

  // Lista med alla filmer
  return (
    <ul className="list-group">
      {movies.map((movie, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between align-items-center"
          data-title={movie.title}
          data-grade={movie.rating}
        >
          <div>
            {/* Visar filmens titel */}
            <span className="me-2">{movie.title}</span>

            {/* Visar stjärnor för filmens betyg */}
            {[...Array(movie.rating)].map((_, i) => (
              <img
                key={i}
                src="public/images/star.png"
                alt="Star"
                style={{ height: '20px', marginLeft: '2px' }}
              />
            ))}
          </div>

          {/* Knapp för att ta bort filmen */}
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => onDeleteMovie(index)}
            aria-label={`Ta bort ${movie.title}`}
          >
            <img
              src="/public/images/delete.png"
              alt="Delete movie"
              style={{ height: '16px' }}
            />
          </button>
        </li>
      ))}
    </ul>
  );
}