document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);
    const message = document.getElementById("message");

    if (campoB > campoA) {
        message.textContent = "Formulário válido: O número B é maior que o número A.";
        message.className = "message success";
    } else {
        message.textContent = "Formulário inválido: O número B deve ser maior que o número A.";
        message.className = "message error";
    }
});
