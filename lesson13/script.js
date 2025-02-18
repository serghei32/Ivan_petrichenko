// result=confirm('How is it going?');
// console.log(result);


// const unswer=prompt('are you 16 ?', '24 ')
// console.log(typeof(unswer));

const answers =[]

answers[0] = prompt('kak vashe imia ?')
answers[1] = prompt('kak vashe familia ?')
answers[2] = prompt('skolko let ?')
const elem=document.createElement('div')
const text =answers.join()
elem.appendChild(text)
console.log(elem);
