type deputado = {
    id: number,
    idDeputado: number,
    uriPartido: string,
    nome: string,
    siglaPartido: string,
    siglaUf: string,
    idLegislatura: number,
    fotoDeputado: string,
    email?: string,
}

type perfilDeputado = {
    dados: {
        cpf: string,
        dataFalecimento: string,
        dataNascimento: string,
        escolaridade: string,
        id: number,
        municipioNascimento: string,
        nomeCivil: string,
        redeSocial: [
            string
        ],
        sexo: string,
        ufNascimento: string,
        ultimoStatus: {
            condicaoEleitoral: string,
            data: string,
            descricaoStatus: string,
            email: string,
            gabinete: {
                andar: string,
                email: string,
                nome: string,
                predio: string,
                sala: string,
                telefone: string
            },
            id: number,
            idLegislatura: number,
            nome: string,
            nomeEleitoral: string,
            siglaPartido: string,
            siglaUf: string,
            situacao: string,
            uri: string,
            uriPartido: string,
            urlFoto: string
        },
        uri: string,
        urlWebsite: string
    },
    links: [
        {
            href: string,
            rel: string,
            type: string
        }
    ]
}
export { deputado, perfilDeputado };