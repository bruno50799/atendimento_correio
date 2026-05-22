const botaoenviar = document.getElementById('btn');

botaoenviar.addEventListener('click', processar);
botaoenviar.addEventListener('mouseenter', entrou);
botaoenviar.addEventListener('mouseout', saiu);

function entrou() {
    botaoenviar.style.background = 'yellow';
    botaoenviar.style.color = 'black';
}

function saiu() {
    botaoenviar.style.background = 'green';
    botaoenviar.style.color = 'white';
}
function processar(){

    const txtn = document.getElementById('txtnome');
    const txti = document.getElementById('txtidade');
    const res = document.getElementById('res');

    let nome = txtn.value;
    let idade = Number(txti.value);

    // || é o operador lógico "OU" — se algum campo estiver vazio, mostrar erro.
    if (nome == '' || txti.value == '') {
        res.innerHTML = '[ERRO] Obrigatório preencher os dados!';
        return;
    }

    let agora = new Date();
    let hora = agora.getHours();
    let diaSem = agora.getDay();

    let saudacao = '';

    if (hora < 12) {
        saudacao = 'Bom dia';
    } else if (hora <= 18) {
        saudacao = 'Boa tarde';
    } else {
        saudacao = 'Boa noite';
    }

    let classe = ''
    let classCss = ''
    if (idade < 16){
        classe = 'Atendimento Recusado (Menor de idade desacompanhado)'
        classCss = 'recusado'
    }else if (idade < 60){
        classe = 'Fila Comum'
        classCss = 'aceito'
    }else if (idade < 80){
        classe = 'Fila Prioritária'
        classCss = 'prioritaria'
    }else {
        classe = 'Fila Prioridade Especial (80+)'
        classCss = 'especial'
    }

   let guiche = ''

switch (diaSem) {
    case 0:
        guiche = 'Fechado (Domingo)'
        break

    case 1:
        guiche = 'Guichê A - Setor de Documentação'
        break

    case 2:
        guiche = 'Guichê B - Setor de Contratos'
        break

    case 3:
        guiche = 'Guichê C - Finanças'
        break

    case 4:
        guiche = 'Guichê D - Recursos Humanos'
        break

    case 5:
        guiche = 'Guichê E - Suporte Geral'
        break

    case 6:
        guiche = 'Fechado (Sábado)'
        break

    default:
        guiche = '[ERRO] Dia inválido'
        break
}
    res.className = classCss;
    res.innerHTML = `<p>${saudacao}, <strong>${nome.toUpperCase()}</strong>!</p>`;
    res.innerHTML += `<p>Sua classificação é: <strong>${classe}</strong>.</p>`;

    if (diaSem == 0 || diaSem == 6) {
        res.innerHTML += `<p>Status: <strong style="color:red">${guiche}</strong></p>`;
    } else {
        res.innerHTML += `<p>Por favor, dirija-se ao: <strong>${guiche}</strong></p>`;
    }
}

