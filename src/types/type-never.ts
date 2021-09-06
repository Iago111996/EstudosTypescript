//nao retorna nada
export function criarErro(): never {
  throw new Error('error');
}
//ela cria um erro que pode parar a aplicacao
criarErro();
