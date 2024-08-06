'use client';
import usePokemon from "@/app/hooks/usePokemon";
import PokemonCard from "../PokemonCard";
import { Pokemon } from "@/app/types";

interface IPokemonListProps {
    pokemonData: (Pokemon | null)[]
}

export default function PokemonList({ pokemonData }: IPokemonListProps) {
    return (
        <div className="row">
            {pokemonData?.map((pokemon) => {
                if (pokemon) {
                    return (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={pokemon.name}>
                            <PokemonCard pokemon={pokemon} />
                        </div>)
                }
                return null
            })}
        </div>
    );
}

