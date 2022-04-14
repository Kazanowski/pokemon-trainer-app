import HomeView from "./../Views/HomeView";
import HelloView from "./../Views/HelloView";

import PokemonModel from "./../Models/PokemonModel";
import State from "./../Models/State";

const homePageController = () => {
  HomeView.render();
};

const catchPokemonsController = () => {
  const catchedPokemons = PokemonModel.getCatchedPokemons();

  console.log({
    nickname: State.nicknameValue,
    pokemons: catchedPokemons,
  });
};

const loadPokemonsController = async (nickname: string) => {
  State.nicknameValue = nickname;

  const offset = State.nicknameValue.length * 10;
  await PokemonModel.load(5, offset);

  HelloView.render(State.nicknameValue, PokemonModel.getPokemonsData());
};

export const init = () => {
  HomeView.addHandlerRender(homePageController);
  HomeView.addhandlerSubmit(loadPokemonsController);
  HelloView.addHandlerCatchPokemons(catchPokemonsController);
};
