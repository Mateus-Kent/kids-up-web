const Form = {
  phoneInput: document.querySelector("#phone"),
  submit: (event) => {
    if(Form.checkHasNotTypedField()) {
      return;
    }
    if (!Form.checkPassword()) {
      event.preventDefault();
      alert("As senhas não estão iguais, digite novamente");
      return;
    }
    Form.phoneInput.value = Form.destroyPhoneMask(Form.phoneInput.value);
  },
  checkPassword: () => {
    const password = document.querySelector("#password").value;
    const confirm = document.querySelector("#confirm").value;
    return password === confirm;
  },

  createPhoneMask: (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
  },

  destroyPhoneMask: (value) => {
    return value.replace(/\D/g, "");
  },

  checkHasNotTypedField: () => {
    const inputList = [...document.querySelectorAll(".input-field")];
    return inputList.filter((input) => !input.value).length > 0;
  },

  registerEvents: () => {
    const phone = Form.phoneInput;

    phone.addEventListener("keypress", () => {
      phone.value = Form.createPhoneMask(phone.value);
    });
  },
};

Form.registerEvents();
