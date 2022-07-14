function recebeDoisNumeros(num1:number, num2:number):void {
    const soma: number = num1+num2;
    const subtracao: number = num1-num2;
    const multiplicacao: number = num1*num2;
    const numeroMaior: number = Math.max(num1, num2)

    console.log (soma, subtracao, multiplicacao, numeroMaior)
}