import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Pokemon } from '../types'

type PokemonState = {
    caugthPokemon: {
        [key: string]: Pokemon | null,
    }
}

type PokemonAction = {
    catch: (newPokemon: Pokemon) => void,
    release: (pokemonName: string) => void,
}

const usePokemonStore = create<PokemonState & PokemonAction>()(
    persist(
        (set) => ({
            caugthPokemon: {},
            catch: (newPokemon) =>
                set((state) => ({
                    caugthPokemon: {
                        ...state.caugthPokemon,
                        [newPokemon.name]: newPokemon
                    }
                })),
            release: (pokemonName) =>
                set((state) => ({
                    caugthPokemon: {
                        ...state.caugthPokemon,
                        [pokemonName]: null
                    }
                })),
        }),
        {
            name: 'pokemon-storage',
            storage: createJSONStorage(() => localStorage)
        }
    )
)
export default usePokemonStore;