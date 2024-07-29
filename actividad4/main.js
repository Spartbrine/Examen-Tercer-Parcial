document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('agregar-item').addEventListener('click', agregarItem);

    function agregarItem() {
        let itemName = prompt("Ingrese el nombre del ítem:");
        if (!itemName) {
            itemName = 'Nuevo ítem';
        }
        
        const lista = document.getElementById('lista-items');
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = itemName;
        
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'ml-2 btn-danger';
        botonEliminar.addEventListener('click', function() {
            lista.removeChild(nuevoItem);
        });
        
        nuevoItem.appendChild(botonEliminar);
        lista.appendChild(nuevoItem);
    }

});