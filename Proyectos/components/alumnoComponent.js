class alumnoComponent extends HTMLElement{
    nombre;

    constructor(){
        super();
    }

    connectedCallback(){
        this.nombre= this.getAttribute("alumno");
        this.addHTML();
    }

    handleEvent(e){
        if(e.type === "click"){
            let evento = new CustomEvent("event-emit",{
                detail:{nombre:this.nombre},
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(evento);
        }
    }

    addHTML(){
        let boton = document.createElement("button");
        boton.style.setProperty("background-image","url(../resources/image.png)" ); // con el nombre podria elegir diferentes fotos
        boton.addEventListener("click",this);
        this.append(boton);
    }
    
}
customElements.define("alumno-component",alumnoComponent);