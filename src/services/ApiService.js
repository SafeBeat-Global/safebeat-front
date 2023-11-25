import CredentialsValidation from "../components/CredentialsValidation";
import { fetchWithNetworkErrorHandling } from "./ErrorHandlingService.js";

const ip = '192.168.15.5'; // ip da máquina
const port = '8080'; // port vide a api de comunicacao

// Metodo POST para cadastrar usuario
export const handleRegisterUser = async (name, email, pass, confirmPass, phone, setErrorMessage, setSuccessMessage) => {
  try {
    if (!CredentialsValidation.validateCredentials(name, email, pass, confirmPass, phone)) {
      setErrorMessage('Por favor, preencha todos os campos corretamente.');
      return;
    } else {
      const response = await fetchWithNetworkErrorHandling(`http://${ip}:${port}/usuario/registrar`, {
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

      if (response.ok) {
        setSuccessMessage('Cadastro feito com sucesso!');
        const data = await response.json();
        return data, {"sucesso": true};
      } else {
        setErrorMessage(`Erro desconhecido: ${response.status} ${response.statusText}`);
        return;
      }
    }

  } catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
};

// Metodo POST para retornar um token de sucesso
export const handleLoginUser = async (email, pass, setErrorMessage) => {
  try {
    if (!email || !CredentialsValidation.validateEmail(email) ||
        !pass || !CredentialsValidation.validatePass(pass)) {
      setErrorMessage('Por favor, preencha todos os campos corretamente.');
      return null;
    } else {
      const response = await fetch(`http://${ip}:${port}/usuario/login`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          senha: pass
        })
      });

      if (!response.ok) {
        setErrorMessage('Email ou senha incorretos.');
      }

      const data = await response.json();
      return data.token;
    }

  } catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
};

// Metodo GET para puxar as informacoes do usuario
export const getUserInfo = async (email) => {
  try {
    if (!email || !CredentialsValidation.validateEmail(email)) {
      return null;
    } else {
      const response = await fetch(`http://${ip}:${port}/usuario?email=${encodeURIComponent(email)}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        return null;
      }

      const users = await response.json();
      const user = users.find(user => user.email === email);
      if (!user) {
        return null;
      }

      const userInfo = {
        nome: user.nome,
        email: user.email,
        telefone: user.telefone
      };
      return userInfo;
    }

  } catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
};

// Metodo DELETE para excluir um usuario
export const handleDeleteUser = async (email) => {
  try {
    if (!email || !CredentialsValidation.validateEmail(email)) {
      return null;
    } else {
      const userInfo = await getUserInfo(email);
      if (!userInfo) {
        return null;
      }

      const response = await fetch(`http://${ip}:${port}/usuario/${encodeURIComponent(userInfo.id)}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      return data;
    }

  } catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
};

// MOCK TEMPORÁRIO
export const handleUpdateUserPhone = async (email, newPhone, setErrorMessage) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && newPhone) {
        resolve({
          telefone: newPhone,
        });
      } else {
        reject('Telefone inválido');
      }
    }, 1000);
  });
};
//MOCK TEMPORÁRIO

/* EM DESENVOLVIMENTO 

// Metodo PUT para atualizar os dados do usuario
export const handleUpdateUserPhone = async (email, newPhone) => {
  try {
    if (!email || !CredentialsValidation.validateEmail(email)) {
      console.error('Email inválido');
      return null;
    } else {
      const userInfo = await getUserInfo(email);
      if (!userInfo) {
        console.error('Informações do usuário não encontradas');
        return null;
      }
      
      const response = await fetch(`http://${ip}:${port}/usuario/${encodeURIComponent(userInfo.id)}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          telefone: newPhone,
        })
      });

      if (!response.ok) {
        console.error('Erro na resposta da API:', response.statusText);
        return null;
      }

      const data = await response.json();
      return data;
    }

  } catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
};
*/