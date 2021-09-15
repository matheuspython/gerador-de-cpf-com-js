import GeraCPF from './modules/GeraCPF.js'

import './assets/css/resets.css'
import './assets/css/style.css'

(()=>{
  const cpfGerado = new GeraCPF()
  const divResult = document.querySelector('.cpf-gerado')

  divResult.innerHTML = `
  o cpf gerado é:
  <p id="cpf">${cpfGerado.geraNovoCpf()}</p>  
  `


})()