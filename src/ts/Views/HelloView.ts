import PokemonCardView from "./PokemonCardView";

interface PokemonDataInterface {
  name: string;
  atwork: string;
}

class HelloView {
  parentElement: HTMLElement = document.querySelector(".app-wrapper")!;
  btnCatch: HTMLButtonElement = document.createElement("button");

  addHandlerCatchPokemons(handler: any) {
    this.btnCatch.addEventListener("click", handler);
  }

  generateMarkup(
    nickname: string,
    pokemons: PokemonDataInterface[]
  ): HTMLElement {
    const wrapperElement: HTMLDivElement = document.createElement("div");
    wrapperElement.classList.add("page-hello");

    const headingHTML = `<h1>Hello, <span class="heading-primary">${nickname}</span></h1>`;
    wrapperElement.insertAdjacentHTML("afterbegin", headingHTML);

    const pokemonsWrapperElement: HTMLDivElement =
      document.createElement("div");
    pokemonsWrapperElement.classList.add("pokemons-wrapper");

    const pokemonsWrapperHTML = `
      <h2>You have a chance to catch them!</h2>
      <div class="pokemons">${pokemons
        .map((pokemon: PokemonDataInterface) => PokemonCardView.render(pokemon))
        .join("")}</div>`;

    pokemonsWrapperElement.insertAdjacentHTML("beforeend", pokemonsWrapperHTML);

    this.btnCatch.classList.add("btn", "btn--primary", "btn-catch");
    this.btnCatch.textContent = "Catch'em";

    pokemonsWrapperElement.insertAdjacentElement("beforeend", this.btnCatch);

    wrapperElement.insertAdjacentElement("beforeend", pokemonsWrapperElement);

    return wrapperElement;
  }

  render(nickname: string, pokemons: PokemonDataInterface[]) {
    this.clearParentElement();
    this.parentElement.insertAdjacentElement(
      "beforeend",
      this.generateMarkup(nickname, pokemons)
    );
  }

  clearParentElement() {
    this.parentElement.innerHTML = "";
  }
}

export default new HelloView();
