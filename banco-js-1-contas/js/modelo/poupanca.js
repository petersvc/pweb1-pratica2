class Poupanca extends Conta {
    constructor(numero, saldo, dataAniversario) {
        super(numero, saldo);
        this._dataAniversario = dataAniversario
    }

    creditar(valor) {
        const hoje = "02/05"
        let juros = 1
        if(this._dataAniversario === hoje) {
            juros = 1.1
        }
        super.creditar(valor * juros);
    }

    get dataAniversario() {
        return this._dataAniversario
    }
    set dataAniversario(novaDataAniversario) {
        this._dataAniversario = novaDataAniversario
    }

}
