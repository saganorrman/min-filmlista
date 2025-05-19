// Gör så att komponenten körs på klienten
'use client';

// Knapp för att sortera filmer efter betyg
export default function OrderByGradeButton({ onClick }) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      Betygsordning
    </button>
  );
}