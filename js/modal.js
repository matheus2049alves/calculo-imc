export const Modal = {
  BtnClose : document.querySelector(".close"),
  Message : document.querySelector('.modal-wrapper h2'),
  wrapper: document.querySelector('.modal-wrapper'),
  
  open() {
    document.querySelector('.modal-wrapper').classList.add('open') 
  },
  close() {
    document.querySelector('.modal-wrapper').classList.remove('open')
  }
}

Modal.BtnClose.addEventListener('click', function(){
  Modal.close();
 })

 window.addEventListener('keydown',(event) => {
  if (event.key === 'Escape'){
    Modal.close()
  }
 })