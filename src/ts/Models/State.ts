import { Pokemon } from "./PokemonModel";

class State {
  private nickname: string;
  private pokemons: Pokemon[];
  constructor() {
    this.nickname = "";
    this.pokemons = [];
  }

  set nicknameValue(nickname: string) {
    this.nickname = nickname;
  }

  get nicknameValue() {
    return this.nickname;
  }

  getPokemons = () => this.pokemons;

  addPokemon(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
  }
}

export default new State();
