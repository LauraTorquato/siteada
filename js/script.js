document
  .getElementById("botaoEnviar")
  .addEventListener("click", validaFormulario);

function validaFormulario() {
  if (
    document.getElementById("nome").value != "" &&
    document.getElementById("email").value != "" &&
    document.getElementById("telefone").value != ""
  ) {
    alert("Obrigada por se inscrever. Você receberá as novidades por e-mail!");
  } else {
    alert("Por favor, preencha os campos de nome, email e telefone");
  }
}
