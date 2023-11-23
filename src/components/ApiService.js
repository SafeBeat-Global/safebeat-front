const ip = '192.168.15.5'; // ip da máquina
const port = '8080'; // port vide a api de comunicacao

// Cadastro de usuario
export const cadastrarUsuario = async (nome, email, senha, telefone) => {
  try {
    const response = await fetch(`http://${ip}:${port}/usuarios`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        email: email,
        senha: senha,
        telefone: telefone
      })
    });

    if (!response.ok) {
      throw new Error('Erro na solicitação: ' + response.status);
    }

    const data = await response.json();
    return data, {"sucesso": true};
  } catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
};