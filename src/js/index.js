const opcoesDeClassificacao = document.getElementsByName('classification');
const botaoEnviar = document.querySelector('#submit');

botaoEnviar.addEventListener('click', () => {

    function verificacaoDeSelecao() {
        opcaoSelecionada = '';
        opcoesDeClassificacao.forEach(function(opcao) {
            opcao.checked ? opcaoSelecionada = opcao.nextElementSibling.textContent : null
        });
        
        if (opcaoSelecionada === '') {
            alert('Selecione uma das opções abaixo para prosseguir.');
            return;
        };

        alterandoAPaginaSeAOpcaoFoiSelecionada(opcaoSelecionada);
    };

    function alterandoAPaginaSeAOpcaoFoiSelecionada(opcaoSelecionada) {
        const secaoDeClassificao = document.querySelector('.component-card.active');
        secaoDeClassificao.classList.remove('active');
        
        const secaoDeAgradecimento = secaoDeClassificao.nextElementSibling;
        secaoDeAgradecimento.classList.add('active');

        const descricaoDaAvaliacao = document.getElementById('selected-option');
        descricaoDaAvaliacao.innerHTML = `You selected ${opcaoSelecionada} out of ${opcoesDeClassificacao.length}`;
    };

    verificacaoDeSelecao();
});