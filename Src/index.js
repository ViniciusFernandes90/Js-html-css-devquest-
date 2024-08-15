function verificar(){
    let inputNome = document.getElementById("inputNome")
    let labels = document.getElementsByName('Label')

    let inputEmail = document.getElementById("inputEmail")

    let inputTelefone = document.getElementById("inputTelefone")

    let inputMensagem = document.getElementById('inputMensagem')

    if (inputNome.value == ""){
        inputNome.classList.add("bordaVermelha")
        labels[0].classList.add('mostrar')
        inputNome.classList.remove("bordaVerde")


    }
    
    if(inputEmail.value == ""){

        inputEmail.classList.add("bordaVermelha")
        labels[1].classList.add('mostrar')
        inputEmail.classList.remove("bordaVerde")
    }
    
    if(inputTelefone.value == ""){

        inputTelefone.classList.add("bordaVermelha")
        labels[2].classList.add('mostrar')
        inputTelefone.classList.remove("bordaVerde")
    }

    if(inputMensagem.value == ""){
        inputMensagem.classList.add("bordaVermelha")
        labels[3].classList.add('mostrar')
        inputMensagem.classList.remove("bordaVerde")
    }
    

}
let labels = document.getElementsByName('Label')


inputNome.addEventListener('change', ()=>{
    if(inputNome.value !== ""){
        inputNome.classList.add("bordaVerde")
        inputNome.classList.remove("bordaVermelha")
        labels[0].classList.remove('mostrar')
    }else{
        inputNome.classList.remove("bordaVerde")
    }
})

inputEmail.addEventListener('change', ()=>{
    if(inputEmail.value !== ""){
        inputEmail.classList.add("bordaVerde")
        inputEmail.classList.remove("bordaVermelha")
        labels[1].classList.remove('mostrar')
    }else{
        inputEmail.classList.remove("bordaVerde")
    }
})

inputTelefone.addEventListener('change', ()=>{
    if(inputTelefone.value !== ""){
        inputTelefone.classList.add("bordaVerde")
        inputTelefone.classList.remove("bordaVermelha")
        labels[2].classList.remove('mostrar')
    }else{
        inputTelefone.classList.remove("bordaVerde")
    }
})

inputMensagem.addEventListener('change', ()=>{
    if(inputMensagem.value !== ""){
        inputMensagem.classList.add("bordaVerde")
        inputMensagem.classList.remove("bordaVermelha")
        labels[3].classList.remove('mostrar')
    }else{
        inputMensagem.classList.remove("bordaVerde")
    }
})