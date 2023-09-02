class ContaController {
    constructor() {
        this.repositorioContas = new RepositorioContas();
    }

    adicionarConta(conta) {
        this.repositorioContas.adicionar(conta);
    }

    listar() {
        this.repositorioContas.getContas().forEach(conta =>
            this.inserirContaNoHTML(conta)
        );
    }

    inserir(evento) {
        evento.preventDefault();
        const elementoTipoDaConta = document.querySelector('#tipoDaConta');
        const elementoNumero = document.querySelector('#numero');
        const elementoSaldo = document.querySelector('#saldo');
        const elementoDataAniversario = document.querySelector('#dataAniversario');
        const conta = this.criarConta(elementoTipoDaConta, elementoNumero, elementoSaldo, elementoDataAniversario)
        this.repositorioContas.adicionar(conta);
        this.inserirContaNoHTML(conta);
        console.log(conta)
    }

    criarConta(elementoTipoDaConta, elementoNumero, elementoSaldo, elementoDataAniversario) {
        let conta = new Conta(elementoNumero.value,
            Number(elementoSaldo.value));
        if (elementoTipoDaConta.value === "contaBonificada") {
            conta = new ContaBonificada(elementoNumero.value,
                Number(elementoSaldo.value));
        } else if (elementoTipoDaConta.value === "poupanca") {
            conta = new Poupanca(elementoNumero.value,
                Number(elementoSaldo.value), elementoDataAniversario.value);
        }
        return conta
    }

    inserirContaNoHTML(conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = 'Conta ' + conta.numero + ': ' + conta.saldo;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click', (event) => {
            this.repositorioContas.remover(conta.numero);
            event.target.parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }

    // criarDataAniversario(){
    //     const elementoDataAniversarioInput = document.createElement('input');
    //     const elementoDataAniversarioLabel = document.createElement('label');
    //     const quebraDeLinha = document.createElement('br');
    //
    //     elementoDataAniversarioInput.id = "dataAniversario"
    //     quebraDeLinha.id = "quebraDeLinha2"
    //     elementoDataAniversarioLabel.htmlFor = "dataAniversario"
    //     elementoDataAniversarioLabel.textContent = "Data Aniversario: "
    //
    //     const elementoSaldoInput = document.querySelector('#saldo');
    //
    //     elementoSaldoInput.insertAdjacentElement("afterend", quebraDeLinha);
    //     quebraDeLinha.insertAdjacentElement("afterend", elementoDataAniversarioLabel);
    //     elementoDataAniversarioLabel.insertAdjacentElement("afterend", elementoDataAniversarioInput);
    //
    // }
    //
    // removerDataAniversario() {
    //     const elementoDataAniversarioInput = document.querySelector('#dataAniversario');
    //     const elementoDataAniversarioLabel = document.querySelector('label[for="dataAniversario"]');
    //     const elementoDataAniversarioQuebraDeLinha = document.querySelector('#quebraDeLinha2');
    //
    //     elementoDataAniversarioLabel.remove()
    //     elementoDataAniversarioInput.remove()
    //     elementoDataAniversarioQuebraDeLinha.remove()
    // }
}
