const botonPublicar= document.getElementById("publicar");
const post= document.getElementById("publicacion")

botonPublicar.addEventListener("click", event =>{
  let mensaje= document.getElementById("mensaje").value;
  post.innerHTML+= `<p> ${mensaje}</p>`
})