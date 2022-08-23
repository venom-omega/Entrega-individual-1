const email = document.getElementById("email")
const contraseña = document.getElementById("contraseña")
const parrafo = document.getElementById("warnings")
const form = document.getElementById("form")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let regexEmail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/
    let entrar = false
    if(!regexEmail.test(email.value)){
        warnings += `Email no valido <br>`
        entrar = true
    }
    if(contraseña.value.length === 0){
        warnings += `Contraseña no valida <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
   if(contraseña.value.length > 0 &&
      
      regexEmail.test(email.value)) {
        window.open("cover.html", "_self")
      }
})

