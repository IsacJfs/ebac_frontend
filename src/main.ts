function multiplicar(a: number, b: number): number {
    return a * b;
}

function saudacao(nome: string): string {
    return "Olá " + nome;
}

const resultadoMultiplicacao = multiplicar(10, 2);
const resultadoSaudacao = saudacao("Isac");

console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);
console.log(`Resultado da saudação: ${resultadoSaudacao}`);
