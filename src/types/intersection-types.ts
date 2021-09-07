// & intersection entre varios conjuntos

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
//aqui com um type ja da certo
//type Pessoa = TemNome | TemIdade | TemSobrenome;

//aqui so se estiver todos
type Pessoa = TemNome & TemIdade & TemSobrenome;
const pessoa3: Pessoa = {
  idade: 30,
  nome: 'Luiz',
  sobrenome: 'Pinto',
};

console.log(pessoa3);
