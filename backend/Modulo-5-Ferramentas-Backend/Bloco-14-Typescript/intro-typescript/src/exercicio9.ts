function checaEstudanteLabenu(idade:number, possuiEnsinoMedio: boolean, horasDisponiveisNaSemana: number, cursoIntegralOuNoturno: string): boolean {

    let podeEstudarNaLabenu: boolean;
    idade = Number(prompt("Qual a sua idade?"));
    horasDisponiveisNaSemana = Number(prompt("Quantas horas você tem disponíveis na semana?"));
    cursoIntegralOuNoturno = prompt("Você deseja fazer o curso integral ou noturno").toLocaleUpperCase()

    const ensinoMedio: string = prompt("Possui ensino médio completo? (Sim ou não)").toLocaleUpperCase()

    if (ensinoMedio === "SIM") {
        possuiEnsinoMedio = true;
    } else {
        possuiEnsinoMedio = false;
    }

    if (cursoIntegralOuNoturno === "NOTURNO" ) {
        if (idade >= 18 && possuiEnsinoMedio && horasDisponiveisNaSemana >= 20) {
            return podeEstudarNaLabenu = true;
        } else {
            return podeEstudarNaLabenu = false;
        }
    } else if (cursoIntegralOuNoturno === "INTEGRAL") {
        if (idade >= 18 && possuiEnsinoMedio && horasDisponiveisNaSemana >= 40) {
            return podeEstudarNaLabenu = true;
        } else {
            return podeEstudarNaLabenu = false;
        }
    }
}