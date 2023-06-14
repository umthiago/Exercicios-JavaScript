function verificarTriangulo (){

    // variaveis
    var inladoA = document.getElementById("inladoA");
    var inladoB = document.getElementById("inladoB");
    var inladoC = document.getElementById("inladoC");
    var outSimNao = document.getElementById("outSimNao");
    var outTipo = document.getElementById("outTipo");

    // teste o chamado da função como clique do botão
     console.log("A é")
    // converter dados para numero 

    ladoA = Number(inladoA.value);
    ladoB = Number(inladoB.value);
    ladoC = Number(inladoC.value);

     // criar condições para exibir a resposta 
    if ( ladoA > ladoB + ladoC ||
        ladoB > ladoA + ladoC || ladoC > ladoA + ladoB  ){
            outSimNao.textContent = "Os lados não podem formar um triângulo"

        
    } else {
        outSimNao.textContent = "Os lados podem formar um triângulo"
        
        if ( ladoA == ladoB && ladoA == ladoC) {
            outTipo.textContent = "Triângulo do tipo Equilátero "
            outTipo.style.color = "red"
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {

            outTipo.textContent = "Triângulo do tipo Isóceles"
            outTipo.style.color = "blue"
        } else {
            
            outTipo.textContent = "Triângulo do tipo Escaleno"
            outTipo.style.color = "green"

    }

    }

}
// função ao botão
    var btVerificar = document.getElementById("btVerificar");
    btVerificar.addEventListener("click", verificarTriangulo);