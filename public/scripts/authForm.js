const AuthForm = {
  submit: async (event) => {

    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value,
      }),
    });

    if(response.status == 401) {
      return;
    }

  },
  logout: () => {
    document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    location.href = '/';
  }
};
