// Exemplo de script para adicionar interatividade
document.addEventListener('DOMContentLoaded', function() {
  console.log('Scripts carregados corretamente');
  
  // Placeholder para futuras interatividades, como validação de formulário
  document.querySelector('.contact-form').addEventListener('submit', function(event) {
      alert('Formulário enviado com sucesso!');
      event.preventDefault(); // Remover esta linha quando integrar com back-end
  });
});
