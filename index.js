// Calculadora Geométrica
// Escreva um programa em javascript para calcular a área de
// diferentes formas geométricas. O programa deve iniciar
//  com um menu contendo as diferentes opções de cálculas. As opções devem ser:

// área do triângulo: base * altura / 2
// área do retângulo: base * altura
// área do quadrado: lado²
// área do trapézio: (base maior + base menor) * altura / 2
// área do círculo: pi * raio² (considere pi = 3.14)
// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos.
// O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

let questionMenu;

//__________________
function menu() {
  questionMenu = window
    .prompt(
      "___Bem vindo a calculadora geométrica:\n\n" +
        "O que deseja calcular:" +
        "\n1- Area do triangulo" +
        "\n2 Area do retangulo" +
        "\n3- Area do quadrado" +
        "\n4- Area do trapezio" +
        "\n5- Area do circulo" +
        "\n6- Sair",
    )
    .toLowerCase();
  return questionMenu;
}

function entradaDados() {
  if (questionMenu === "1" || questionMenu === "area do triangulo") {
    window.alert("Voce deseja calcular a area de um triangulo");
    let baseTriangulo = parseFloat(window.prompt("Digite a base do triangulo"));
    let alturaTriangulo = parseFloat(
      window.prompt("Digite a altura do triangulo"),
    );
    let triangulo = {
      baseTriangulo: baseTriangulo,
      alturaTriangulo: alturaTriangulo,
      areaTriangulo: (alturaTriangulo * baseTriangulo) / 2,
    };
    return triangulo;
  } else if (questionMenu === "2" || questionMenu === "area do retangulo") {
    let baseRetangulo = parseFloat(window.prompt("Qual a base do retangulo?"));
    let alturaRetangulo = parseFloat(
      window.prompt("Qual a altura do retangulo?"),
    );
    let retangulo = {
      baseRetangulo: baseRetangulo,
      alturaRetangulo: alturaRetangulo,
      areaRetangulo: baseRetangulo * alturaRetangulo,
    };
    return retangulo;
  } else if (questionMenu === "3" || questionMenu === "area do quadrado") {
    let ladoQuadrado = parseFloat(window.prompt("Qual lado do quadrado?"));
    let quadrado = {
      ladoQuadrado: ladoQuadrado,
      areaquadrado: ladoQuadrado * ladoQuadrado,
    };
    return quadrado;
  } else if (questionMenu === "4" || questionMenu === "area do trapezio") {
    let baseTrapezioMaior = parseFloat(
      window.prompt("Qual a base maior do trapezio?"),
    );
    let baseTrapezioMenor = parseFloat(
      window.prompt("Qual a base menor do trapezio?"),
    );
    let alturaTrapezio = parseFloat(
      window.prompt("Qual a altura do trapezio?"),
    );

    let trapezio = {
      baseTrapezioMaior: baseTrapezioMaior,
      baseTrapezioMenor: baseTrapezioMenor,
      alturaTrapezio: alturaTrapezio,
      areaTrapezio:
        ((baseTrapezioMaior + baseTrapezioMenor) * alturaTrapezio) / 2,
    };
    return trapezio;
  } else if (questionMenu === "5" || questionMenu === "area do circulo") {
    window.alert("Voce deseja calcular a area de um circulo!");
    let raioCirculo = parseFloat(window.prompt("Qual o raio do circulo?"));

    let circulo = {
      raioCirculo: raioCirculo,
      areaCirculo: 3.14 * (raioCirculo * raioCirculo),
    };
    return circulo;
  } else {
    window.alert("Voce selecionou a opcao de SAIR");
  }
}
//_________________________________
function exibirDados(resultado) {
  if (questionMenu === "1" || questionMenu === "area do triangulo") {
    window.alert(`A Area do triangulo é: ${resultado.areaTriangulo}`);
  } else if (questionMenu === "2" || questionMenu === "area do retangulo") {
    window.alert(`A Area do retangulo é: ${resultado.areaRetangulo}`);
  } else if (questionMenu === "3" || questionMenu === "area do quadrado") {
    window.alert(`A Area do quadrado é: ${resultado.areaquadrado}`);
  } else if (questionMenu === "4" || questionMenu === "area do trapezio") {
    window.alert(`A Area do traoezio é: ${resultado.areaTrapezio}`);
  } else if (questionMenu === "5" || questionMenu === "area do circulo") {
    window.alert(`A Area do circulo é: ${resultado.areaCirculo}`);
  }
}

//_________________________
do {
  menu();
  let resultado = entradaDados();
  exibirDados(resultado);
} while (questionMenu !== "sair" && questionMenu !== "6");
window.alert("Encerrando....");
