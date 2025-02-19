/*
function parOulmpar (numero) {
if (numero%2==0) {
    console.log(numero+"è nùmero par");
}else{
    console.log(numero+"è nùmero impar");
}
}
parOulmpar(2);
function Area(larg,alt){
tijolo=0.0252
muro=(larg*alt)/tijolo;
console.log("vocè vai presisar de: " + Math.round (muro) + " tijolos");
}
Area(4,3)

function determinarDiasNoMes(mes){
    switch(mes){
     case 2:
        console.log(" 28 ou 29 ");
        break;
     case 4:
     case 6:
     case 9:
     case 11:
        console.log("30 dias");
        break;
      default:
     console.log("31 dias");
    }
}
determinarDiasNoMes(10);*/

function salariomilitar(posto,salario){
    salario=2500
switch (posto){
    case posto="soldado":
        salario*=1.15;
        console.log("seu novo salario sera:",salario)
        break;
    case posto="cabo":
        salario*=1.10;
        console.log("seu novo salario sera:",salario)
        break;
        case posto="sargento":
            salario*=1.20;
            console.log("seu novo salario sera:",salario)
            break;
        case posto="oficial":
            salario*=1.06;
            console.log("seu novo salario sera:",salario)
        break;
      case posto="general":
        salario*=2.30;
        console.log("seu novo salario sera:",salario)
    break;
default:
console.log("não existe esse posto militar");

}
}
salariomilitar("general");











