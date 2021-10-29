import { alterarFundo } from "./alterar.js";
import { Pais } from "./pais.js";
import { Interface } from "./ui.js";

const select = document.querySelector('#filtroRegiao');
const inputPais = document.querySelector('#pesquisa');
const spinner = document.querySelector('.container-spiner');
const erro = document.querySelector('.erro');
const logo = document.querySelector('.logo');
const secaoBandeira = document.querySelector('.secao-bandeira');
const containerBandeira = document.querySelector('.container-bandeira');


alterarFundo();
const pais = new Pais();
const ui = new Interface()





function carregarPaises() {
    spinner.classList.remove('esconder');
    secaoBandeira.classList.add('esconder');
    pais.pegarTodosPaises().then(data => {

        if (data.message === 'Page Not Found') {
            spinner.classList.add('esconder');
            erro.classList.remove('esconder');
        } else {
            // Show profile
            ui.monstrarBandeiras(data);
            erro.classList.add('esconder');
            const bandeira = document.querySelectorAll('.box-bandeira');
            clickBandeira();
            clickvoltar();
        }
    });


}

carregarPaises();


select.addEventListener('change', (event) => {
    spinner.classList.remove('esconder');
    secaoBandeira.classList.add('esconder');

    if (select.value == 'all') return carregarPaises();

    pais.pegarPaisesContinente(select.value)
        .then(data => {
            if (data.message === 'Page Not Found') {

                spinner.classList.add('esconder');
                erro.classList.remove('esconder');

            } else {

                ui.monstrarBandeiras(data);
                clickBandeira();
            }

        });
});


inputPais.addEventListener('keyup', (e) => {
    spinner.classList.remove('esconder');
    secaoBandeira.classList.add('esconder');


    const userText = e.target.value;

    if (!userText.trim()) {
        select.value = "all";
        return carregarPaises();
    }

    pais.pegarPais(userText.trim())
        .then(data => {
            if (data.message === 'Page Not Found') {

                spinner.classList.add('esconder');

                erro.classList.remove('escoder')
            } else {

                try {
                    ui.monstrarBandeiras(data);
                    erro.classList.add('esconder');
                    clickBandeira();
                } catch {

                    spinner.classList.add('esconder');
                    // Show alert
                    erro.classList.remove('esconder');

                }

            }

        });

});

function clickBandeira() {
    const bandeira = document.querySelectorAll('.box-bandeira');

    bandeira.forEach(elemento => {
        elemento.addEventListener('mouseup', function(e) {

            let el = e.target.closest('.box-bandeira');
            ui.esconderPaises();
            spinner.classList.remove('esconder');


            pais.pegarPais(el.dataset.countries).then(data => {
                ui.mostrarDetalhes(data[0])
                clickVizinhos();
            })


        })
    })
}

function clickVizinhos() {
    const vizinhos = document.querySelectorAll('.box-vizinhos');

    if (vizinhos.length === 0) return

    vizinhos.forEach(elemento => {
        elemento.addEventListener('mouseup', function(e) {

            let el = e.target.closest('.box-vizinhos');
            ui.esconderPaises();
            spinner.classList.remove('esconder');

            pais.pegarPaisVizinho(el.dataset.countries).then(data => {
                ui.mostrarDetalhes(data);
                clickVizinhos();
            })

        })
    })
}


logo.addEventListener('click', voltar)

function clickvoltar() {
    const btnvoltar = document.querySelector('.box-voltar');

    btnvoltar.addEventListener('mouseup', voltar);


}


function voltar() {
    ui.esconderDescricao();
    carregarPaises();
    select.value = "all";
}