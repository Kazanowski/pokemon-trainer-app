import Field from "../Components/Field";

const nicknameRegexp: RegExp = /[^"]{2,100}/;

class HomeView {
  parentElement: HTMLElement = document.querySelector(".app-wrapper")!;
  formElement: HTMLFormElement = document.createElement("form");
  nicknameFieldInstance = new Field({
    name: "nickname",
    label: "Enter your nickname",
    type: "text",
    isRequired: true,
    regexp: nicknameRegexp,
  });

  addHandlerRender(handler: any) {
    window.addEventListener("load", handler);
  }

  addhandlerSubmit(handler: any) {
    this.formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      if (this.nicknameFieldInstance.validation()) {
        handler(this.nicknameFieldInstance.value);
      }
    });
  }

  generateMurkup() {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card", "page-hello");
    this.formElement.id = "form-nickname";
    this.formElement.classList.add("form-nickname");
    const headingHTML = `<h1>Welcome in <br/> <span class="heading-primary">Pokemon Trainer App</span></h1>`;
    const submitButtomHTML = `<input type="submit" value="Continue" class="btn--primary" />`;

    this.formElement.insertAdjacentElement(
      "afterbegin",
      this.nicknameFieldInstance.render()
    );
    this.formElement.insertAdjacentHTML("beforeend", submitButtomHTML);

    cardElement.insertAdjacentHTML("afterbegin", headingHTML);
    cardElement.insertAdjacentElement("beforeend", this.formElement);

    return cardElement;
  }

  render() {
    this.clearParentElement();
    this.parentElement.insertAdjacentElement(
      "beforeend",
      this.generateMurkup()
    );
  }

  clearParentElement() {
    this.parentElement.innerHTML = "";
  }
}

export default new HomeView();
