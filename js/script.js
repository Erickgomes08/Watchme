document.querySelector("button").addEventListener("click", function () {
    var email = document.querySelector("input[type=text]").value;
    alert("te enviaremos para outra pagina para continuar o processo: " + email);
});