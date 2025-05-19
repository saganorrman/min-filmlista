// Gör så att komponenten körs på klienten
'use client'

// Importerar MovieApplication-komponenten
import MovieApplication from '@/components/MovieApplication';

// Startsidan visar MovieApplication-komponenten
export default function Home() {
  return <MovieApplication />;
}