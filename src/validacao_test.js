const validarEmail = require("./validador");

describe("validador.js", () => {
  it("deve retornar true para um email válido (com @ e ponto)", () => {
    expect(validarEmail("aluno@faculdade.com")).toBe(true);
  });

  it("deve retornar false para um email sem o símbolo @", () => {
    expect(validarEmail("aluno-faculdade.com")).toBe(false);
  });

  it("deve retornar false para um email sem ponto", () => {
    expect(validarEmail("aluno@faculdade")).toBe(false);
  });

  it("deve lançar erro se o parâmetro não for uma string", () => {
    expect(() => validarEmail(123)).toThrow(
      "O parâmetro precisa ser uma string",
    );
    expect(() => validarEmail(null)).toThrow();
  });
});
