const idade = 18

if (idade < 18) {
    console.log('Participate menor de idade');
}else{
    console.log('Seja bem vindo');
}

var listaDeParticipantes = 
[
    'João',
    'Manuel',
    'Fernando', 
    'Jorge',
    'Jose',
    'Amanda',
    'Ananda',
    'Benjamin',
]
 

if (listaDeParticipantes.length <= 100) {
    console.log('Ainda há lugar disponivel!');
}else{
    console.log('Evento lotado!');
}

let palestrantes = [
    'Jose Gilherme',
    'João Pirez',
    'Fernado João',
]

if (palestrantes.length <= 5) {
    console.log('Faltam Palestrantes chegar.');
}else{
    console.log('Todos os Palestrantes chegaran no evento.');
}


let dataDoEvento = "28/02/2022";
let dataPosterior = "01/03/2022"

if (dataDoEvento === dataDoEvento) {
    console.log("Tenha uma excelente aprecentação");
}
else{ dataDoEvento === dataPosterior
    console.log('Infelizmente o evento já aconteceu :(');
}