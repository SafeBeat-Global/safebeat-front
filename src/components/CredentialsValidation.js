const CredentialsValidation = {
  validateEmail: (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  validateName: (name) => {
    const re = /^[a-zA-Z]+$/;
    return re.test(String(name));
  },
  validatePass: (pass) => {
    return pass.length >= 8;
  },
  validateConfirmPass: (pass, confirmPass) => {
    if (confirmPass.length < 8 || pass !== confirmPass) {
      return false;
    }
    return true;
  },
  formatPhone: (phone) => {
    phone = phone.replace(/\D/g, "");
    phone = phone.replace(/^(\d{2})(\d)/g, "($1) $2");
    phone = phone.replace(/(\d)(\d{4})$/, "$1-$2");
    return phone;
  },
  validatePhone: (phone) => {
    return phone.length === 15;
  },
}

export default CredentialsValidation;