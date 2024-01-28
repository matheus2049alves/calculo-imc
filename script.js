const form = document.querySelector('Form')
const inputHeigth = document.querySelector('#heigth')
const inputWidth = document.querySelector('#width')
const btnClose = document.querySelector(".close")

form.onsubmit = function(event) {
  event.preventDefault();

  const Heigth = inputHeigth.value;
  const width = inputWidth.value;
  const imcResult = imc(Heigth,width)
  
  if (!isNaN(imcResult)) {
    document.querySelector('.modal-wrapper').classList.add('open')
    document.querySelector('.modal-wrapper h2').innerText = `Seu IMC é de ${imcResult}`
  }else{
    document.querySelector('.alert-error').classList.add('open')
    setTimeout(()=> {
      document.querySelector('.alert-error').classList.remove('open')
    },2000)
  }
}

function imc(Heigth, width){
  return (width/(Heigth * Heigth)).toFixed(2)
}

btnClose.addEventListener('click', function(){
  document.querySelector('.modal-wrapper').classList.remove('open')
})

