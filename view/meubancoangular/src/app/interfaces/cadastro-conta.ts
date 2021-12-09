export interface ICadastroConta {
  agencia: string,
  cliente: {
    id: number,
    nome: string,
    cpf: string,
    email: string,
    ativo: boolean,
    observacoes: string
  }
  numero: string,
  saldo: number
}
