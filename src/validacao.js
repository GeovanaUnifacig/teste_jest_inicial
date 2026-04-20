function validarEmail(email) {
  if (email.includes("@") && email.includes(".")) {
    return true;
  }
  return false;
}

module.exports = validarEmail;
