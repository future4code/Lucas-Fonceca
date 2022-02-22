import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
   it("retorna true para '[1, 2, 1]'", () => {
       const possuiItensDuplicados = checaItensDuplicados([1, 2, 1])

       expect(possuiItensDuplicados).toEqual(true)
   }); 

   it("retornar false para '[]'", () => {
       const possuiItensDuplicados = checaItensDuplicados([])

       expect(possuiItensDuplicados).toEqual(false)
   });

   it("retorna true para '[5, 5, 3, 6, 5, 6]'", () => {
       const possuiItensDuplicados = checaItensDuplicados([5, 5, 3, 6, 5, 6])

       expect(possuiItensDuplicados).toEqual(true)
   });

    it("retorna false para '[1, 2, 3]'", () => {
        const possuiItensDuplicados = checaItensDuplicados ([1, 2, 3])

        expect(possuiItensDuplicados).toEqual(false)
    });

});
