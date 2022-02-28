function validateCPF(cpf) {
    if (cpf.length !== 11) {
      return { valid: false, text: "CPF need to has 11 Numbers!" };
    } else {
      return { valid: true, text: "" };
    }
  }

  
function validatePassword(password) {
    if (password.length < 4 || password.length > 72) {
      return { valid: false, text: "Password need to at least 4 and at most 72 characters!" };
    } else {
      return { valid: true, text: "" };
    }
  }

  export {validateCPF, validatePassword};