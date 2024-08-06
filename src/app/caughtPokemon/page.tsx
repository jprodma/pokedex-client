
'use client';
import usePokemonStore from "@/app/store/pokemonStore";
import PokemonList from "../components/PokemonList";

export default function CaughtPokemon() {
    const pokemon = usePokemonStore((state) => state.caugthPokemon);
    const pokemonData = Object.keys(pokemon).map((name) => {
        return pokemon[name];
    })
    return (
        <main className='container'>
            <h1 className="text-center my-4">My Pokemon</h1>
            <PokemonList pokemonData={pokemonData} />
        </main>
    );
}
