import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
<h1>Holiwiiiisss</h1>
<button id="btnMagia">MAGIA!</button>
</div>
`

let btnDOM = document.getElementById('btnMagia') as HTMLButtonElement;
console.log(btnDOM);

//Hacer que ese BOTON realice un ALERT que diga Chauchis