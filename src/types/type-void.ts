// void -> return vazio
function necerReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa1 = {
  nome: 'Iago',
  sobre: 'Pinto',

  showName(): void {
    console.log(this.nome + this.sobre);
  },
};

const alfabeto: string[] = ['a', 'b', 'c'];
console.log(alfabeto.join(' '));
