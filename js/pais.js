export class Pais {
    constructor() {

        this.urlPais = 'https://restcountries.com/v2/all';
        this.continente = 'https://restcountries.com/v3.1/region/';
        this.inputPais = 'https://restcountries.com/v2/name';
        this.paisVizinho = 'https://restcountries.com/v2/alpha';

    }

    async pegarTodosPaises() {
        const ajax = await fetch(this.urlPais);

        const jsonResposta = await ajax.json();

        return jsonResposta;
    }
    async pegarPaisesContinente(conti) {

        const ajax = await fetch(`${this.continente}/${conti}`);

        const jsonResposta = await ajax.json();

        return jsonResposta;
    }

    async pegarPais(pais) {

        const ajax = await fetch(`${this.inputPais}/${pais}`);

        const jsonResposta = await ajax.json();

        return jsonResposta;
    }

    async pegarPaisVizinho(vizinho) {
        const ajax = await fetch(`${this.paisVizinho}/${vizinho}`);

        const jsonResposta = await ajax.json();

        return jsonResposta;
    }
}