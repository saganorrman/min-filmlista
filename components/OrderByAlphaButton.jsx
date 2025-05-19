// Gör så att komponenten körs på klienten
'use client';

// Knapp för att sortera filmer alfabetiskt
export default function OrderByAlphaButton({ onClick }) {
  return (
    <button className="btn btn-primary me-2" onClick={onClick}>
      Alfabetisk ordning
    </button>
  );
}