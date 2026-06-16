let fotos = ['foto1','foto2'];

fotos.forEach((foto) => {
    let component=document.createElement("alumno-component");
    component.setAttribute("alumno",foto);
    document.querySelector(".container").append(component);

})

document.addEventListener("event-emit", (e) => {
    console.log(e);
    document.querySelector(".nombre").textContent=e.detail.nombre;
})