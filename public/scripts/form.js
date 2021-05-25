const Form = {
  phoneInput: document.querySelector("#phone"),
  submit: (event) => {
    Form.phoneInput.value = Form.destroyPhoneMask(Form.phoneInput.value);
    if (!Form.checkPassword()) {
      event.preventDefault();
      alert("As senhas não estão iguais, digite novamente");
      return;
    }
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

  registerEvents: () => {
    const phone =  Form.phoneInput;

    phone.addEventListener("keypress", () => {
    phone.value = Form.createPhoneMask(phone.value);
    });
  },
};


Form.registerEvents();
