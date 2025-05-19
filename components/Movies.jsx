// Gör så att komponenten körs på klienten
'use client';

// Komponent som visar filmer i en lista
export default function Movies({ movies, onDeleteMovie }) {
  return (
    <div>
      {movies.map((movie, index) => (
        // Div för varje film i listan
        <div
          key={index}
          className="d-flex justify-content-between align-items-center bg-light p-3 mb-2 rounded shadow-sm"
        >
          {/* Filmens titel */}
          <div className="fw-bold">{movie.title}</div>

          <div className="d-flex align-items-center">
            {/* Stjärnor */}
            <div className="me-3 d-flex">
              {Array.from({ length: movie.rating }).map((_, i) => (
                <img
                  key={i}
                  src="/star.png"
                  alt="star"
                  style={{ width: '20px', height: '20px', marginRight: '2px' }}
                />
              ))}
            </div>

            {/* Delete-knapp */}
            <button
              onClick={() => onDeleteMovie(index)}
              className="btn btn-link p-0"
              aria-label="Ta bort film"
            >
              <img
                src="/delete.png"
                alt="Ta bort"
                style={{ width: '24px', height: '24px' }}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}