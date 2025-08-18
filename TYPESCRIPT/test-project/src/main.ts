<<<<<<< HEAD
import './style.css'
=======
import './style.css';
>>>>>>> c6e842c4b535689b8f1ec454947f051026597571


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
<h1>Holiwiiiisss</h1>
<button id="btnMagia">MAGIA!</button>
</div>
`

let btnDOM = document.getElementById('btnMagia') as HTMLButtonElement;
console.log(btnDOM);

//Hacer que ese BOTON realice un ALERT que diga Chauchis