(function(){
    //VARIABLES

    var lista = document.getElementById("lista"),
            tareaInput = document.getElementById("tarea"), 
            boton = document.getElementById("agregarTarea");
    //FUNCIONES
    var nuevaTarea = function () {
        //primero creamos variables
        var tarea=tareaInput.value,
            nuevaLi=document.createElement("li"),
            enlace=document.createElement("a"),
            nuevoTexto=document.createTextNode(tarea);

            //Ahora revisamos que el imput de texto este vacio 
            if (tarea ==="") {
                tareaInput.setAttribute("placeholder", "Agrega  tarea valida");
                tareaInput.className = "error";
                return false; //con este false ya no se ejecuta el codigo siguiente                
            }//
            //si no esta vacio el input entonces 
            //agregamos el elemento que se escriba
            enlace.appendChild(nuevoTexto);
            enlace.setAttribute("href", "#");
            nuevaLi.appendChild(enlace);
            lista.appendChild(nuevaLi);
            
            //el input debe quedar vacio despues de agregar el elemento a la lista
            tareaInput.value="";
            //necesitamos este for para eliminar ya que el de abajo solo 
            //elimina los primeros elementos
            for(var i=0; i<=lista.children.length-1; i++ ){
                lista.children[i].addEventListener("click", function(){
                    this.parentNode.removeChild(this);

                });
            }
        
    };

    var comprobacionInput = function () {
        tareaInput.className="";
        tareaInput.setAttribute("placeholder", "Agrega Tarea");


    };
    
    var eliminarTarea= function(){
        this.parentNode.removeChild(this);
     
    };
    
    // EVENTOS

    //agregar tarea
    boton.addEventListener("click", nuevaTarea);
    //comprobar si el input esta vacio
    tareaInput.addEventListener("click", comprobacionInput);
    //este for entra antes que los de las funciones y elimina 
    //los elementos  al hacer click, son las tareas de ejemplo q se tienen
    for(var i=0; i<=lista.children.length-1; i++){
        lista.children[i].addEventListener("click", eliminarTarea);
    }
  
}());


