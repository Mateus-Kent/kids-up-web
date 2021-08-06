const ProfileForm = {
  submit: async (event) => {
    event.preventDefault();

    try {
      await fetch("http://localhost:3001/edit-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ProfileForm.getFormData()),
      });
      console.log("logando")
    } catch (error) {
      console.log(error);
    }
  },
  getFormData: () => {
    const data = {};

    const inputList = [...document.querySelectorAll(".form-input")];

    inputList.map((input) => {
      data[input.name] = input.value;
    })

    return data;
  },
};
