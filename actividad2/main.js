document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('number-form');
    const listaNumeros = document.getElementById('lista-numeros');
    const listaResultados = document.getElementById('lista-resultados');
    const transformarButton = document.getElementById('transformar');

    let numeros = [];

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const numero = parseInt(document.getElementById('numero').value);

        if (!isNaN(numero)) {
            numeros.push(numero);
            agregarNumeroALista(numero, listaNumeros);
            form.reset();
        }
    });

    transformarButton.addEventListener('click', function () {
        const resultados = transformarYFiltrar(numeros);
        listaResultados.innerHTML = '';
        resultados.forEach(resultado => agregarNumeroALista(resultado, listaResultados));
    });

    function agregarNumeroALista(numero, lista) {
        const li = document.createElement('li.list-group-item');
        li.textContent = numero;
        lista.appendChild(li);
    }

    function transformarYFiltrar(numeros) {
        return numeros
            .map(numero => numero * numero)
            .filter(cuadrado => cuadrado > 20);
    }

});
