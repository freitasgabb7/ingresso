function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let qtdIngresso = document.getElementById('qtd');
    let qtd = parseInt(qtdIngresso.value);

    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    if (tipoIngresso.value == 'pista') {
        comprarPista(qtd);
        alert(`A compra de ${qtd} ingressos para ${tipoIngresso.value} foi efetuada.`);
    } else if (tipoIngresso.value == 'superior') {
        comprarSuperior(qtd);
        alert(`A compra de ${qtd} ingressos para ${tipoIngresso.value} foi efetuada.`);
    } else if (tipoIngresso.value == 'inferior') {
        comprarInferior(qtd);
        alert(`A compra de ${qtd} ingressos para ${tipoIngresso.value} foi efetuada.`);
    } else {
        alert('Selecione o tipo de ingresso.');
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade insuficiente de ingressos para Pista.');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade insuficiente de ingressos para cadeira Superior.');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade insuficiente de ingressos para cadeira Inferior.');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
    }
}