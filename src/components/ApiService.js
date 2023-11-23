import CredentialsValidation from "./CredentialsValidation";

const ip = '192.168.15.5'; // ip da máquina
const port = '8080'; // port vide a api de comunicacao

const validateCredentials = (name, email, pass, confirmPass, phone) => {
  if (!name || !CredentialsValidation.validateName(name) ||
    !email || !CredentialsValidation.validateEmail(email) ||
    !pass || !CredentialsValidation.validatePass(pass) ||
    !confirmPass || !CredentialsValidation.validateConfirmPass(pass, confirmPass) ||
    !phone || !CredentialsValidation.validatePhone(phone)) {
    return false;
  }
  return true;
};

// Cadastro de usuario
export const handleRegisterUser = async (name, email, pass, confirmPass, phone, setErrorMessage) => {
  try {
    if (!validateCredentials(name, email, pass, confirmPass, phone)) {
      setErrorMessage('Por favor, preencha todos os campos corretamente.');
      return;
  } else {
    const response = await fetch(`http://${ip}:${port}/usuario/registrar`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: name,
        email: email,
        senha: pass,
        telefone: phone,
        tipoUsuario: 'comum'
      })
    });

    if (!response.ok) {
      throw new Error('Erro na solicitação: ' + response.status);
    }

    const data = await response.json();
    return data, {"sucesso": true};
  }

  } catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
};
