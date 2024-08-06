'use client';

import { Pokemon } from "@/app/types";
import styles from './styles.module.scss';
import usePokemonStore from "@/app/store/pokemonStore";

interface IPokemonCardProps {
    pokemon: Pokemon
}

export default function PokemonCard({ pokemon }: IPokemonCardProps) {
    const pokemonData = usePokemonStore((state) => state.caugthPokemon);
    const catchPokemon = usePokemonStore((state) => state.catch);
    const releasePokemon = usePokemonStore((state) => state.release);

    const isCaught = pokemonData[pokemon.name];

    const togglePokemonCatch = () => {
        if (isCaught) {
            releasePokemon(pokemon.name)
        }
        else {
            catchPokemon(pokemon);
        }
    }

    return (
        <div className="card">
            <div className="card-img-top text-center">
                <img src={pokemon.image} className={`${styles.pokeImage}`} alt={pokemon.name} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <div className="card-text">
                    Types:
                    <ul>
                        {pokemon.types.map((type) => (
                            <li key={type}>{type}</li>
                        ))}
                    </ul>
                </div>
                <div className="text-center">
                    {isCaught ?
                        <button className="btn btn-danger btn-small" onClick={togglePokemonCatch}>Release Pokemon!</button> :
                        <button className="btn btn-success btn-small" onClick={togglePokemonCatch}>Catch Pokemon!</button>
                    }
                </div>
            </div>
        </div>
    );
}
