export class Interface {
    constructor() {
        this.secaoBandeira = document.querySelector('.secao-bandeira');
        this.containerBandeira = document.querySelector('.container-bandeira');
        this.containerPesquisa = document.querySelector('.container-pesquisa');
        this.spinner = document.querySelector('.container-spiner');
        this.voltar = document.querySelector('.secao-voltar');
        this.secaoDescricao = document.querySelector('.secao-descricao');
        this.containerDescricao = document.querySelector('.container-descricao');
    }


    monstrarBandeiras(value) {

        this.containerBandeira.innerHTML = '';
        let html = '';

        value.forEach(element => {

            console.log(element)
            console.log(element.name.common)

            html += `
        <div class="box-bandeira shadow-pop-tr" data-countries="${element.name.common || element.name}">
                <figure>
                    <img class="figura-img" src="${element.flags.png}" alt="${element.name.common || element.name}">
                    <figcaption>
                        <h2>${element.name.common || element.name}</h2>

                        <div class="container-population">
                            <span>Population: </span>
                            <span>${element.population.toLocaleString("en-US")}</span>
                        </div>

                        <div class="container-region">
                            <span>Region: </span>
                            <span>${element.region}</span>
                        </div>

                        <div class="container-capital">
                            <span>Capital: </span>
                            <span>${element.capital || ''}</span>
                        </div>

                    </figcaption>
                </figure>
        </div>
            `
        });


        this.containerBandeira.insertAdjacentHTML('beforeend', html);

        this.spinner.classList.add('esconder');
        this.secaoBandeira.classList.remove('esconder');



    }
    mostrarDetalhes(value) {


            this.containerDescricao.innerHTML = '';

            let html = '';


            html += `
        
    <div class="container-img-descricao roll-in-left">
        <img class="descricao-img" src="${value.flag}" alt="">
    </div>

    <div class="container-info-descricao roll-in-right">

        <h2>${value.name}</h2>

        <div class="info">

            <div class="box-info1">
                <p>Native Name:
                    <span class="info-pais">${value.nativeName}</span>
                </p>

                <p>Population:
                    <span class="info-pais">${value.population.toLocaleString("en-US")}</span>
                </p>

                <p>Region:
                    <span class="info-pais">${value.region}</span>
                </p>

                <p>Sub Region:
                    <span class="info-pais">${value.subregion}</span>
                </p>

                <p>Capital:
                    <span class="info-pais">${value.capital ||''}</span>
                </p>
            </div>

            <div class="box-info2">
                <p>Top Level Domain:
                    <span class="info-pais">
                    ${value.topLevelDomain}

                    </span>
                </p>

                <p>Currencies:
                    <span class="info-pais">${value.currencies?value.currencies[0].name : ''}</span>
                </p>

                <p>Languages:
                    <span class="info-pais">${value.languages.map(lang=>{
                        return ` ${lang.name}`
                    })}</span>
                </p>
            </div>

        </div>

        <div class="container-vizinhos">
            <h3>Border Countries: </h3>

            ${ value.borders? value.borders.map(vizinho=>{return `<div class="box-vizinhos" data-countries="${vizinho}">${vizinho}</div>`}).join(''):''}



        </div>

    </div>
        
        `;

        this.voltar.classList.remove('esconder');
        this.spinner.classList.add('esconder');
        this.containerDescricao.insertAdjacentHTML('beforeend', html);
        this.secaoDescricao.classList.remove('esconder')
        

    }

    esconderPaises() {
        this.secaoBandeira.classList.add('esconder');
        this.containerPesquisa.classList.add('esconder');
    }

    esconderDescricao(){

        
        this.secaoDescricao.classList.add('esconder');
        this.voltar.classList.add('esconder');
        this.containerDescricao.innerHTML="";
        this.containerPesquisa.classList.remove('esconder');

    }



}