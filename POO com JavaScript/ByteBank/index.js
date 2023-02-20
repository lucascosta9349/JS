class Cliente {
  nome
  cpf
  agencia
  saldo
  rg
}

const Cliente1 = new Cliente()
const Cliente2 = new Cliente()

Cliente1.nome = 'Ricardo'
Cliente1.cpf = 11122233309
Cliente1.agencia = 1001
Cliente1.saldo = 0
Cliente1.rg = 123456789

Cliente2.nome = 'Alice'
Cliente2.cpf = 88822233309
Cliente2.agencia = 1001
Cliente2.saldo = 0

// Cliente3.nome = 'Ricardo'
// Cliente3.cpf = 11122233309
// Cliente3.agencia = 1001
// Cliente3.saldo = 0

console.log(Cliente1, Cliente2)
