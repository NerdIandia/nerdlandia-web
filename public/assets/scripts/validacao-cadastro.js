const Form = {
  submit: async (event) => {
    const password = document.querySelector("#password").value;
    const confirm = document.querySelector("#confirm").value;
    if (password != confirm) {
      event.preventDefault();
      alert("As senhas não estão iguais, digite novamente");
      return;
    }
    const form = document.getElementById("form-group");
    const response = await fetch("http://localhost:3000/users", {
      method: "post",
      body: new FormData(form),
    });
    const data = response.json();
  },
};
