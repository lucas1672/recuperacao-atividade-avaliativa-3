import leia from "readline-sync"

var time1 = leia.questionInt ("Digite a quantidade de goals do time 1 \n")
var time2 = leia.questionInt ("Digite a quantidade de goals do time 2 \n")

var placar =  time1 - time2



if (placar < 0){
    placar *= -1
}

switch (placar) {

    case 0:   
    
        console.log ( "partida ruim")
    break;

     case 1:
     case 2:
     case 3:
        console.log(" faz o basico")
    break;
    
    default:
        console.log("jogou de mais")
    break;

}