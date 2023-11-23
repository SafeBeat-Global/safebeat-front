

export const validarEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const validarNome = (nome) => {
  const re = /^[a-zA-Z]+$/;
  return re.test(String(nome));
}

export const validarSenha = (senha) => {
  return senha.length >= 8;
}

export const formatarTelefone = (text) => {
  text = text.replace(/\D/g, "");
  text = text.replace(/^(\d{2})(\d)/g, "($1) $2");
  text = text.replace(/(\d)(\d{4})$/, "$1-$2");
  setTelefone(text);

  if (text.length < 14) {
    setTelefoneColor('red');
  } else {
    setTelefoneColor('#FDFDFF');
  }
};