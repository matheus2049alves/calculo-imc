import {Modal} from './modal.js'
import { alerterror } from './alert-error.js'

const form = document.querySelector('Form')
const inputHeigth = document.querySelector('#heigth')
const inputWidth = document.querySelector('#width')
 
form.onsubmit = function(event) {
  event.preventDefault();

  const Heigth = inputHeigth.value;
  const width = inputWidth.value;
  const imcResult = imc(Heigth,width)
  
  if (!isNaN(imcResult)) {
    Modal.open();
    Modal.Message.innerText = `Seu IMC é de ${imcResult}`
  }else{
    alerterror.open()
    setTimeout(()=> {
      alerterror.close()
    },2000)
  }
}


//funções
function imc(Heigth, width){
  return (width/(Heigth * Heigth)).toFixed(2)
}


