const pila1 = [];
const pila2 = [];
const pila3 = [];
const pila4 = [];
const pila5 = [];

function operacion(){
    const y = document.getElementById("y").value;
    const x = document.getElementById("x").value;

    let pila;

    switch (x){
        case "1":
            pila = pila1;
            break;
        case "2":
            pila = pila2;
            break;
        case "3":
            pila = pila3;
            break;
        case "4":
            pila = pila4;
            break;
        case "5":
            pila = pila5;
            break;
        default:
            alert("La pila no existe");
            return;                    
    }

    if( y >= 0){
      pila.push(y);
      console.log("Elemento " + y + " añadido a la pila " + x);
    } else if ( y < 0){
        if(pila.length > 0){
            const elementoEliminado = pila.pop();
            console.log("Elemento " + elementoEliminado + " eliminado de la pila " + x);
            alert("Elemento eliminado de la pila " + x);
        } else{
            alert("La pila " + x + " está vacía");
            console.log("La pila " + x + " está vacía. No se puede eliminar ningún elemento.");
        }
    } 
}
