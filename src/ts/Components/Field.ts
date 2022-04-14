interface FieldInterface {
  name: string;
  label?: string;
  type?: string;
  isRequired?: boolean;
  regexp?: RegExp;
}

class Field {
  name: string;
  label: string;
  type: string;
  isRequired: boolean;
  regexp: RegExp | null;
  fieldElement: HTMLDivElement;
  inputElement: HTMLInputElement;

  constructor(data: FieldInterface) {
    this.name = data.name;
    this.label = data.label || this.name;
    this.type = data.type || "text";
    this.isRequired = data.isRequired || false;
    this.regexp = data.regexp || null;
    this.fieldElement = document.createElement("div");
    this.inputElement = this.createInput();
    this.inputElement.addEventListener(
      "focusout",
      this.handleFocusout.bind(this)
    );
  }

  get value() {
    return this.inputElement.value;
  }

  handleFocusout(event: FocusEvent) {
    event.preventDefault();
    this.validation();
  }

  createInput(): HTMLInputElement {
    const input = document.createElement("input");
    input.type = this.type;
    input.id = this.name;
    input.autocomplete = "off";

    return input;
  }

  render(): HTMLDivElement {
    const labelHTML = `<label for="${this.name}">${this.label}</label>`;

    this.fieldElement.classList.add("field");
    this.fieldElement.insertAdjacentHTML("afterbegin", labelHTML);
    this.fieldElement.insertAdjacentElement("beforeend", this.inputElement);

    return this.fieldElement;
  }

  validation() {
    let helperMessage: string = "";

    if (this.isRequired && !this.value) {
      helperMessage = "This field is Required!";
    }

    if (this.value && this.regexp && !this.regexp.test(this.value)) {
      helperMessage = `Invalid ${this.name} format!`;
    }

    if (helperMessage) {
      this.setHelperText(helperMessage);
      return false;
    }

    this.removeHelperText();
    return true;
  }

  setHelperText(text = "", type = "error") {
    const className = `helper-text`;

    if (this.fieldElement.querySelector(`.${className}`)) {
      this.fieldElement.classList.remove("field--error", "field--success");
      this.fieldElement.querySelector(`.${className}`)!.textContent = text;
    } else {
      this.fieldElement.insertAdjacentHTML(
        "beforeend",
        `<span class="${className}">${text}</span>`
      );
    }
    this.fieldElement.classList.add(`field--${type}`);
  }

  removeHelperText() {
    const className = `helper-text`;
    if (this.fieldElement.querySelector(`.${className}`)!) {
      this.fieldElement.querySelector(`.${className}`)!.remove();
      this.fieldElement.classList.remove("field--error", "field--success");
    }
  }
}

export default Field;
