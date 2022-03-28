function recebeDadosUsuario(nome: string, dataDeNascimento: string) : string {
    const dataDeNascimentoSeparado: string[] = dataDeNascimento.split("/")
    return `Olá me chamo ${nome}, nasci no dia ${dataDeNascimentoSeparado[0]} do mês de ${dataDeNascimentoSeparado[1]} do ano de ${dataDeNascimentoSeparado[2]}`
}