# Formulario-estilizado-com-verifica-o-de-idade.

Esse formulário de cadastro estilizado com validação em js. 

Ele verifica se o email, a data de nascimento e o estado civil inseridos pelo usuário são válidos. Aqui está o que cada função faz:

validarEmail(): Esta função verifica se o campo de email tem pelo menos 10 caracteres. Se não tiver, exibe um alerta e retorna false.
validarDataNascimento(): Esta função verifica se a data de nascimento inserida é anterior à data atual. Se não for, exibe um alerta e retorna false.
validarEstadoCivil(): Esta função verifica se o usuário marcou a opção “casado(a)” e se a data de nascimento indica que o usuário tem mais de 15 anos. Se o usuário marcou “casado(a)” e tem 15 anos ou menos, exibe um alerta e retorna false.
validarFormulario(event): Esta função é chamada quando o formulário é enviado. Ela chama as três funções de validação acima e, se alguma delas retornar false, impede que o formulário seja enviado. Se todas as funções de validação retornarem true, exibe um alerta dizendo que os dados foram enviados com sucesso.

