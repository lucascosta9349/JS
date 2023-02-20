class Cliente {
  nome
  cpf
  rg
}

class ContaCorrente {
  agencia
  #saldo = 0

  sacar(valor) {
    if (this.#saldo >= valor) {
      this.#saldo -= valor
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor
      console.log(this.#saldo)
    }
  }
}

const Cliente1 = new Cliente()
const Cliente2 = new Cliente()

Cliente1.nome = 'Ricardo'
Cliente1.cpf = 11122233309
Cliente1.rg = 123456789

Cliente2.nome = 'Alice'
Cliente2.cpf = 88822233309

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.agencia = 1001
contaCorrenteRicardo.depositar(100)

console.log(contaCorrenteRicardo)
