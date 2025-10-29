// Botão "Saiba mais sobre nós"
const botao = document.getElementById('botao');
if (botao) {
  botao.addEventListener('click', () => {
    const sobreNos = document.getElementById('sobre-nos');
    if (sobreNos) {
      sobreNos.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// WhatsApp links
const whatsappLinks = document.querySelectorAll('.whatsapp-link');
if (whatsappLinks.length > 0) {
  whatsappLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const numero = link.getAttribute('data-num');
      window.open(`https://wa.me/${numero}`, '_blank');
    });
  });
}
