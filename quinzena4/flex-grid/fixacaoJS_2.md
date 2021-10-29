``` Javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    
    const apenasNumeroEscolhido = arrayDeNumeros.filter ((number) => {
        return number === numeroEscolhido;
    })
    
    if (apenasNumeroEscolhido.length !== 0) {
      return (`O número ${numeroEscolhido} aparece ${apenasNumeroEscolhido.length}x`);
    } else {
      return (`Número não encontrado`);
    }
}
```