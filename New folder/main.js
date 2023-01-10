const myform= document.querySelector('#my-form')
const nameInput= document.querySelector('#name')
const emailInput= document.querySelector('#email')
const msg= document.querySelector('.msg')
const userList = document.querySelector('#users')

myform.addEventListener('submit',onSubmit)
function onSubmit(e){
e.preventDefault()
if(nameInput.value===''||emailInput.value==='')
{
    msg.classList.add('error')
    msg.innerHTML='please enter all the field'
    setTimeout(()=>msg.remove(),3000)
}
else {
    const li=document.createElement('li')
    li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`))
    userList.appendChild(li)
    nameInput=''
    emailInput=''
}
  }
  const btn= document.querySelector('.btn')
  btn.addEventListener('mouseover',(e)=>{
    e.preventDefault()
    document.querySelector('#my-form').style.background='green'
    document.querySelector('body').classList.add('bg-dark')
    document.querySelector('.items')
    
  });