const body = document.querySelector('body');
body?.style.background = 'red'; //impedimos erro caso nao exista

//asserssao
const body3 = document.querySelector('body');
if (body) body.style.background = 'red'; //impedimos erro caso nao exista

//asserssao
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';
//serve para qq elemento
