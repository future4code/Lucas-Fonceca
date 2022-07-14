``` javascript
function calculaPrecoTotal(quantidade) {
  let precoPorMaca;
  let precoTotal;
  
  if (quantidade < 12) {
    precoPorMaca = 1.30;
    precoTotal = precoPorMaca * quantidade
  } else {
    precoPorMaca = 1;
    precoTotal = precoPorMaca * quantidade
  }
  
  return precoTotal
}
```