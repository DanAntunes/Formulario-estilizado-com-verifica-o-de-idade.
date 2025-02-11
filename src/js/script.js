document.addEventListener('DOMContentLoaded', function() {
  
    function validarEmail() {
      var emailInput = document.getElementById('email');
      if (emailInput.value.length < 10) {
        alert('O email deve ter pelo menos 10 caracteres');
        emailInput.focus();
        return false;
      }
      return true;
    }
  
    
    function validarDataNascimento() {
      var dataNascimentoInput = document.getElementById('dataNascimento-input');
      var dataNascimento = new Date(dataNascimentoInput.value);
      var hoje = new Date();
      if (dataNascimento >= hoje) {
        alert('Data de nascimento inválida');
        dataNascimentoInput.focus();
        return false;
      }
      return true;
    }
  
    
    function validarEstadoCivil() {
      var casadoInput = document.getElementById('casado-input');
      var dataNascimentoInput = document.getElementById('dataNascimento-input');
      if (casadoInput.checked && dataNascimentoInput.value !== '') {
        var dataNascimento = new Date(dataNascimentoInput.value);
        var hoje = new Date();
        var idade = hoje.getFullYear() - dataNascimento.getFullYear();
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
  
    var form = document.getElementById('cadastroForm');
    form.addEventListener('submit', validarFormulario);
  });
