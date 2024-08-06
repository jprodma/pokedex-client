'use client';
import usePokemon from "@/app/hooks/usePokemon";
import PokemonCard from "../PokemonCard";
import { useState } from "react";
import useDebounce from "@/app/hooks/useDebounce";


export default function PokemonFinder() {
    const [pokemonName, setPokemonName] = useState('');
    const { pokemonData, isLoading, isError } = usePokemon(pokemonName);
    const debounce = useDebounce();

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log('TYPING: ', e.target.value);
        debounce(()=>{
            setPokemonName(e.target.value);
        })
    };

    return (
        <div className="row">
            <div className="mb-3">
                <label htmlFor="pokemonName" className="form-label">Find your pokemon:</label>
                <input type="text" className="form-control" id="pokemonName" placeholder="Type your pokemon name" onChange={handleChange} />
            </div>
            {isLoading ? <div>...Finding pokemon</div> : null}
            {isError ? <div>Sorry, there was an error finding your pokemon</div> : null}
            {pokemonData?.map((pokemon) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={pokemon.name}>
                    <PokemonCard pokemon={pokemon} />
                </div>
            ))}
        </div>
    );
}

