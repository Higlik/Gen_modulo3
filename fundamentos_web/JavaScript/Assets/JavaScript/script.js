let nome = document.getElementById("nome")
let email = document.querySelector("#email")
let assusnto = document.querySelector("#assunto")

nome.style.width = "25%"
email.style.width = "25%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 2) {
      txtNome.innerHTML = "Nome Inválido"
      txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    }else {
        txtEmail.innerHTML = "E-mail inválida"
        txtEmail.style.color = "green"
    }
}