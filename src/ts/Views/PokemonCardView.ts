class PokemonCardView {
  render(pokemon: { name: string; atwork: string }) {
    const name = pokemon.name.split("-").join(" ");
    const atwork = pokemon.atwork;

    return `
      <figure class="pokemon">
        <img
          src="${atwork}"
          alt="${name}"
        />
        <figcaption>${name}</figcaption>
      </figure>`;
  }
}

export default new PokemonCardView();
