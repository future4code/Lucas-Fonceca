``` javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    
    let valorMedioCarro = (valorTotalVendas/qtdeCarrosVendidos);

    let comissaoTotal = 100 + (valorMedioCarro*0.05) * qtdeCarrosVendidos;

    let salarioFinal = 2000;
    
        if (qtdeCarrosVendidos>0){

    salarioFinal += comissaoTotal;

    }
    
return salarioFinal;
}
```