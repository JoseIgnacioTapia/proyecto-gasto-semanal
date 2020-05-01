// Variables
const presupuestoUsuario = prompt('Cual es tu presupuesto Semanal?');
let cantidadPresupuesto;

console.log(presupuestoUsuario);

// Clases
// Clases de Presupuesto
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }
    // Método para ir restando del presupuesto actual
    presupuestoRestante(cantidad=0) {
        return this.restante - Number(cantidad);
    }
}




// Event Listeners
document.addEventListener('DOMContentLoaded', function(){
    if(presupuestoUsuario === null || presupuestoUsuario === '') {
        window.location.reload();
    } else {
        // Instanciar un presupuesto
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
    
        console.log(cantidadPresupuesto);
    }
});



