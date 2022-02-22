import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'arara'",  () => {
    const ehPalindromo = checaPalindromo("arara");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'asa'", () => {
    const ehPalindromo = checaPalindromo("asa");
    expect(ehPalindromo).toEqual(true);
  });

  // it("retorna true para 'socorram me subi no onibus em marrocos'", () => {
  //   const ehPalindromo = checaPalindromo ('socorram me subi no onibus em marrocos');
  //   expect(ehPalindromo).toEqual(true)
  // });

  // it("retorna true para 'seras o nada o verao a revoada nos ares'", () => {
  //   const ehPalindromo = checaPalindromo('seras o nada o verao a revoada nos ares');
  //   expect(ehPalindromo).toEqual(true)
  // });
});
