import useSWR from "swr"
import { API_URL } from "../constants";
import { Pokemon } from "../types";

async function fetcher (pokemonName: string) {
  const url = `${API_URL}/pokemon/${pokemonName}`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('ERROR FETCHING DATA: ', error);
  }
}

const usePokemon = (pokemonName: string = '') => {
  const { data, error, isLoading } = useSWR(pokemonName, fetcher)

  return {
    pokemonData: data as unknown as Pokemon[],
    isLoading,
    isError: error
  }
}

export default usePokemon;