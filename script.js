const formulario = document.querySelector(".formulario");
const input = document.querySelector("#inputTarefa");
const lista = document.querySelector("#listaTarefas");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa válida");
        return;
    }

    const li = document.createElement("li");
    li.textContent = texto;

    
    li.addEventListener("click", function () {
        li.remove();
    });

    lista.appendChild(li);
    input.value = "";
});