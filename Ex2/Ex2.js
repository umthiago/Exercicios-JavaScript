const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

const inValor = document.getElementById("inValor");

frm.addEventListener("submit", (e) => {

    let tempo = 0
    let resto = 0
    let vezes = 0

    let Valor = Number(frm.inValor.value);

    e.preventDefault();

    if(Valor >= 3){

        resto = Valor % 3
        vezes = (Valor - resto) / 3
        tempo = tempo + (vezes * 120)
        Valor = resto
    }
    if(resto >= 1.75){
           
        resto = Valor % 1.75
        vezes = (Valor - resto) / 1.75
        tempo = tempo + (vezes * 60)
        Valor = resto
    }
    if(resto >= 1){
           
        resto = Valor % 1
        vezes = (Valor - resto) / 1
        tempo = tempo + (vezes * 30)
        Valor = resto
    }

    resp1.innerText = "Minutos Disponiveis: " + tempo
    resp2.innerText = "Troco: R$ " + resto

})
