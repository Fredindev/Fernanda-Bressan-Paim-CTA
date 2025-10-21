document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('inscription-form');
  const submitButton = document.getElementById('submit-button');
  const formMessage = document.getElementById('form-message');

  // 1. Efeito Pulsar Dinâmico já está ativo via CSS.

  // 2. Validação e Simulação de Envio
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;

    // Validação simples do WhatsApp (apenas números)
    if (!/^[0-9]{10,11}$/.test(whatsapp)) {
      alert("Por favor, insira um número de WhatsApp válido (apenas DD e números).");
      return;
    }

    // Simulação de sucesso
    console.log("Dados capturados:", { nome, email, whatsapp });

    // Esconde os inputs e o botão e mostra a mensagem de sucesso
    form.style.display = 'none';
    formMessage.textContent = `Vaga de ${nome} garantida! Verifique seu e-mail e WhatsApp.`;
    formMessage.classList.remove('hidden');

    // Remove a animação de pulsação
    submitButton.style.animation = 'none';

    // Opcional: Esconde a mensagem após 5 segundos
    setTimeout(() => {
      // Se quiser que o formulário reapareça, descomente:
      // form.style.display = 'flex';
      // formMessage.classList.add('hidden');
    }, 5000);
  });
});