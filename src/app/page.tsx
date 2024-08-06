import PokemonFinder from "./components/PokemonFinder";

export default function Home() {
  return (
    <main className='container'>
      <h1 className="text-center my-4">Pokedex</h1>
      <PokemonFinder />
    </main>
  );
}
