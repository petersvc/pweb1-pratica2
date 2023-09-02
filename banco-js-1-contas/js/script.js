const c1 = new Conta('1', 100);
const c2 = new Conta('2');

const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.saldo);

const elementoTipoDaConta = document.querySelector('#tipoDaConta');

elementoTipoDaConta.addEventListener('change', function(event) {
    const elementoDataAniversario = document.querySelector('#dataAniversarioArea');
    if (elementoTipoDaConta.value === 'poupanca' && elementoDataAniversario.style.display === 'none') {
        elementoDataAniversario.style.display = 'block'
    } else if (elementoTipoDaConta.value !== 'poupanca' && elementoDataAniversario.style.display !== 'none') {
        elementoDataAniversario.style.display = 'none'
    }
    // const elementoDataAniversario = document.querySelector('#dataAniversario');
    // if (elementoTipoDaConta.value === 'poupanca' && elementoDataAniversario === null) {
    //     contaController.criarDataAniversario()
    // } else if (elementoTipoDaConta.value !== 'poupanca' && elementoDataAniversario !== null) {
    //     contaController.removerDataAniversario()
    // }
});


// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))

// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
