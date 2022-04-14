import State from "./State";

interface StatInterface {
  name: string;
  value: number;
}

export interface PokemonInterface {
  name: string;
  atwork: string;
  stats: StatInterface[];
}

export class Pokemon {
  pokemon: PokemonInterface;
  constructor(pokemon: PokemonInterface) {
    this.pokemon = pokemon;
  }

  display() {
    return this.pokemon;
  }

  catch(percentageOfChances: number = 50) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber <= percentageOfChances) {
      return this.pokemon;
    }
    return false;
  }
}

class PokemonModel {
  pokemonURL: string = `https://pokeapi.co/api/v2/pokemon`;
  limit: number = 5;

  load = async (limit: number = this.limit, offset: number) => {
    try {
      const links = (await this.loadLinks(limit, offset)) || [];

      for (const link of links) {
        await this.loadPokemon(link);
      }
    } catch (error) {
      console.log(error);
    }
  };

  loadLinks = async (limit: number, offset: number) => {
    try {
      const result = await fetch(
        `${this.pokemonURL}?limit=${limit}&offset=${offset}`
      );

      const data = await result.json();
      const links: string[] = data.results.map(
        (result: { name: string; url: string }) => result.url
      );

      if (links) return links;
      throw new Error("Something was wrong");
    } catch (error) {
      console.log(error);
    }
  };

  loadPokemon = async (url: string) => {
    try {
      const result = await fetch(url);
      const data = await result.json();

      const pokemon = new Pokemon({
        name: data.name,
        atwork: data.sprites.other["official-artwork"].front_default,
        stats: data.stats.map((stat: any) => {
          return { name: stat.stat.name, value: stat.base_stat };
        }),
      });

      if (pokemon) {
        State.addPokemon(pokemon);
      } else {
        throw new Error("Something was wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  getPokemonsData() {
    const pokemons: Pokemon[] = State.getPokemons();
    return pokemons.map((pokemon: Pokemon) => pokemon.display());
  }

  getCatchedPokemons() {
    const pokemons: Pokemon[] = State.getPokemons();
    let catchedPokemons: any = [];

    pokemons.map((pokemon: Pokemon) => {
      const catchedPokemon = pokemon.catch();
      if (catchedPokemon) catchedPokemons.push(catchedPokemon);
    });

    return catchedPokemons;
  }
}

export default new PokemonModel();
