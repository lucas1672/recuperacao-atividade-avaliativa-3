








function calcularMediaNotas(notas) {
    // Verifica se foram fornecidas exatamente 6 notas
    if (notas.length !== 6) {
        return "Por favor, forneça exatamente 6 notas.";
    }

    // Ordena as notas em ordem crescente
    notas.sort(function(a, b) {
        return a - b;
    });

    import leia from "readline-sync"
    var somaNotas = 0;
  
    for (var  i = 1; i < 5; i++) {
        somaNotas += notas[i];
     
    }

    var media = somaNotas / 4;
   
    return media.toFixed(2);
}


var notas = [7, 8, 9, 6, 5, 8]; 
var  mediaFinal = calcularMediaNotas(notas);

console.log("Média das notas: " + mediaFinal);






