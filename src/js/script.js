document.addEventListener('DOMContentLoaded', () => {
  
    function validarEmail() {
      const emailInput = document.getElementById('email');
      if (emailInput.value.length < 10) {
        alert('O email deve ter pelo menos 10 caracteres');
        emailInput.focus();
        return false;
      }
      return true;
    }
  
    
    function validarDataNascimento() {
      const dataNascimentoInput = document.getElementById('dataNascimento-input');
      const dataNascimento = new Date(dataNascimentoInput.value);
      const hoje = new Date();
      if (dataNascimento >= hoje) {
        alert('Data de nascimento inválida');
        dataNascimentoInput.focus();
        return false;
      }
      return true;
    }
  
    
    function validarEstadoCivil() {
      const casadoInput = document.getElementById('casado-input');
      const dataNascimentoInput = document.getElementById('dataNascimento-input');
      if (casadoInput.checked && dataNascimentoInput.value !== '') {
        const dataNascimento = new Date(dataNascimentoInput.value);
        const hoje = new Date();
        const idade = hoje.getFullYear() - dataNascimento.getFullYear();
        if (idade <= 15) {
          alert('É necessário ter mais de 15 anos para se cadastrar como casado(a)');
          dataNascimentoInput.focus();
          return false;
        }
      }
      return true;
    }
  
    
    function validarFormulario(event) {
      if (!validarEmail() || !validarDataNascimento() || !validarEstadoCivil()) {
        event.preventDefault(); 
      } else {
        alert('Dados enviados com sucesso!');
      }
    }
  
    const form = document.getElementById('cadastroForm');
    form.addEventListener('submit', validarFormulario);
  });
