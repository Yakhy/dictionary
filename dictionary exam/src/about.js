const body = document.body
const darkBtn = document.querySelector('.dark-btn')

const sans = document.querySelector('.sans')
const serif = document.querySelector('.serif')
const mono = document.querySelector('.mono')
const dropbtn = document.querySelector('.dropbtn')
// const modeLocal = localStorage.getItem('mode')
// if(modeLocal){
//   body.classList.add('dark-mode')
//   darkBtn.classList.toggle('hidden')
//   lightBtn.classList.toggle('hidden')
// }
const local = localStorage.getItem('mode') 
if(local) {
  body.classList.toggle('dark-mode')
  body.classList.toggle('white')
  plan.classList.toggle('white')
  dropbtn.classList.toggle('white')

}

darkBtn.addEventListener('click', ()=> {
  body.classList.toggle('dark-mode')
  body.classList.toggle('white')
  plan.classList.toggle('white')
  
  if(body.classList.contains('dark-mode')){
    localStorage.setItem('mode', 'dark-mode')
    
  } else {
    localStorage.setItem('mode', '')
  }

})

sans.addEventListener("click", ()=>{
  body.style.fontFamily = 'Inter'
  dropbtn.textContent = 'Sans-serif'
})

serif.addEventListener("click", ()=>{
  body.style.fontFamily = 'Lora'
  dropbtn.textContent = 'Serif'
})

mono.addEventListener("click", ()=>{
  body.style.fontFamily = 'Inconsolata'
  dropbtn.textContent = 'Mono'
})