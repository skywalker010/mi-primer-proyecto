const user1 = document.getElementById("usuario")
const user2 = document.getElementById("contraseña")
const user3 = document.getElementById("boton")

user3.addEventListener("click", (x)=> { 
x.preventDefault()
const datatbase = {
    userame1:user1.value,
    username2:user2.value 
    
} 
   console.log(datatbase)
 })





