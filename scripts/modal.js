let detnome= document.querySelector("#nome")
let detimagem= document.querySelector("#imagem")
let dettipo1= document.querySelector("#tipo1")
let dettipo2= document.querySelector("#tipo2")

const modal = document.querySelector('.modalContainer')

function openModal(){
    modal.classList.add('active')
}

function closeModal(){
    modal.classList.remove('active')
}