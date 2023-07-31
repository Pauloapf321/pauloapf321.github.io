document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Aqui você pode adicionar o código para enviar os dados do formulário para um servidor,
    // fazer validações ou qualquer outra lógica necessária.
  
    // Neste exemplo, exibiremos uma mensagem de sucesso ao enviar o formulário.
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = "Formulário enviado com sucesso!";
    responseMessage.style.color = "#00c853";
  
    // Limpar o formulário após o envio
    document.getElementById("contactForm").reset();
  });