export type Usuario = {
    nome: string,
    cpf: string,
    dataDeNascimento: string
    saldo: number
}

export const listaDeUsuarios: { lista: Usuario[] } = {
    lista: [
        {
            nome: "Marcio",
            cpf: "111.222.333-44",
            dataDeNascimento: "28/12/1985",
            saldo: 1500
        },
        {
            nome: "Maria",
            cpf: "123.456.789-00",
            dataDeNascimento: "28/12/1985",
            saldo: 1450
        }
    ]
}

export type SaldoContaCorrente = {
    saldo: 0   
}


export type Transacao = {
    valor: number,
    data: number,
    descricao: string
}

export type ContaCorrente = Usuario & SaldoContaCorrente & Transacao