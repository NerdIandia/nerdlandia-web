const Form = {
    submit: (event) => {
  
      const password = document.querySelector("#password").value;
      const confirm = document.querySelector("#confirm").value;
       if( password != confirm ) {
         event.preventDefault();
         alert("As senhas não estão iguais, digite novamente")
         return;
       }
    }
  }