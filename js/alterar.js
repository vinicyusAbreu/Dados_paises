let btnAlterar = document.querySelector('.icones-menu');
export function alterarFundo() {



    btnAlterar.addEventListener('click', (e) => {
        mudarCor();
    })

}

function mudarCor() {
    let temaAtual = document.documentElement.getAttribute("data-theme");

    let mudarParaTema = temaAtual === "Dark" ? "Light" : "Dark";
    btnAlterar.querySelector('span').textContent = mudarParaTema;

    if (mudarParaTema === "Dark") {
        btnAlterar.querySelector('i').classList.remove('fa-sun');
        btnAlterar.querySelector('i').classList.add('fa-moon');
    } else {
        btnAlterar.querySelector('i').classList.remove('fa-moon');
        btnAlterar.querySelector('i').classList.add('fa-sun');
    }



    document.documentElement.setAttribute("data-theme", mudarParaTema);
}