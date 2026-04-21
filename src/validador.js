function validarEmail(email) {
  if (typeof email !== "string") {
    throw new Error("O parâmetro precisa ser uma string");
  }

  if (email.includes("@") && email.includes(".")) {
    return true;
  }
  return false;
}

module.exports = validarEmail;
