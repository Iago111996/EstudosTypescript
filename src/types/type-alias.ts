//criamos um apelido pro type
//sao como contratos
type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'vermelho' | 'verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Margento' | 'Amarelo' | 'Preto';
type corPreferida = CorRGB | CorCMYK; //aqui fazemos union

const pessoa: Pessoa = {
  nome: 'Iago',
  idade: 25,
  salario: 3000,
};

export function setCor(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCor(pessoa, 'Amarelo'));
