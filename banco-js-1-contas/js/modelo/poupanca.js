class Poupanca extends Conta {
    constructor(numero, saldo, dataAniversario) {
        super(numero, saldo);
        this.dataAniversario = dataAniversario
    }

    creditar(valor) {
        const hoje = "02/05"
        let juros = 1
        if(this.dataAniversario === hoje) {
            juros = 1.1
        }
        super.creditar(valor * juros);
    }

}
