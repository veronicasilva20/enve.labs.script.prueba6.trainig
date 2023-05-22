const datos = [{
    img:'html.jpeg',
    desc:'html'
},
{
    img:'img.css.png',
    desc:'css'
},
{
    img:'javascript.jpeg',
    desc:'javascript'
}]

console.log('hello world');

let proyecto = document.querySelector('#proyectos');
console.log(proyecto);
proyectos.style.background = 'red';

let div =document.createElement("div");
let img =document.createElement("img");
img.src='html.jpeg';
let p =document.createElement("p");
p.innerHTML ='css';
div.appendChild(img);
div.appendChild(p);
proyecto.appendChild(div);