document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('ordenar').addEventListener('click', () => {
        const propiedad = document.getElementById('propiedad').value.toLowerCase();
        const objetos = [
            { nombre: 'Alexis', edad: 25 },
            { nombre: 'Mike', edad: 22 },
            { nombre: 'Cristian', edad: 28 },
            { nombre: 'Marcos', edad: 42 },
            { nombre: 'Luis', edad: 12 }
        ];
        const objetosOrdenados = ordenarPorPropiedad(objetos, propiedad);
        mostrarObjetos(objetosOrdenados);
    });

    function ordenarPorPropiedad(arr, propiedad) {
        return arr.slice().sort((a, b) => {
            if (a[propiedad] < b[propiedad]) return -1;
            if (a[propiedad] > b[propiedad]) return 1;
            return 0;
        });
    }

    function mostrarObjetos(objetos) {
        const lista = document.getElementById('lista-objetos');
        lista.innerHTML = '';
        objetos.forEach(obj => {
            const li = document.createElement('li');
            li.textContent = `Nombre: ${obj.nombre}, Edad: ${obj.edad}`;
            lista.appendChild(li);
        });
    }
});