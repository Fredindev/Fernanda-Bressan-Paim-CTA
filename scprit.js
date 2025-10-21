document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('inscription-form');
  const formMessage = document.getElementById('form-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        formMessage.classList.remove('hidden');
        formMessage.textContent = 'Inscrição realizada com sucesso!';
      } else {
        throw new Error('Erro no envio');
      }
    } catch (error) {
      formMessage.classList.remove('hidden');
      formMessage.textContent = 'Ocorreu um erro. Tente novamente.';
    }
  });
});