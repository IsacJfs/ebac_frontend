const alunos = [
    { nome: 'Isac', nota: 10 },
    { nome: 'Ana', nota: 9 },
    { nome: 'Carlos', nota: 5 },
    { nome: 'Eduardo', nota: 7 },
    { nome: 'Maria', nota: 6 },
    { nome: 'Sandra', nota: 3 },
    { nome: 'Paulo', nota: 8 }
];

const notasMaiorSeis = alunos.filter(aluno => aluno.nota >= 6);

console.log(notasMaiorSeis);
