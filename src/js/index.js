const opcoesDeClassificacao = document.getElementsByName('classification');
const button = document.querySelector('#submit');

button.addEventListener('click', () => {

    function verificacaoDeSelecao() {
        opcaoSelecionada = '';
        opcoesDeClassificacao.forEach(function(opcao) {
            if (opcao.checked) {
                opcaoSelecionada = opcao.nextElementSibling.textContent;
                console.log('Opção selecionada:', opcaoSelecionada);
            };
        });
        
        if (opcaoSelecionada === '') {
            alert('Selecione uma das opções abaixo para prosseguir.');
            return;
        };

        function alterandoAPaginaSeAOpcaoFoiSelecionada() {
            const secaoDeClassificao = document.querySelector('.component-card.active');
            secaoDeClassificao.classList.remove('active');
            
            const secaoThankyou = secaoDeClassificao.nextElementSibling;
            secaoThankyou.classList.add('active');

            const selectedOption = document.getElementById('selected-option');
            selectedOption.innerHTML = `You selected ${opcaoSelecionada} out of ${opcoesDeClassificacao.length}`;
        };

        alterandoAPaginaSeAOpcaoFoiSelecionada();
    };

    verificacaoDeSelecao();
});