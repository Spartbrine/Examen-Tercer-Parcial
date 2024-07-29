document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('obtener-usuarios').addEventListener('click', obtenerUsuarios);

        async function obtenerUsuarios() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                mostrarUsuarios(data);
            } catch (error) {
                console.error('Hubo un problema con la solicitud Fetch:', error);
            }
        }

        function mostrarUsuarios(usuarios) {
            const listaUsuarios = document.getElementById('lista-usuarios');
            listaUsuarios.innerHTML = '';
            usuarios.forEach(usuario => {
                const li = document.createElement('li.mt-2.text-center.list-group-item');
                li.textContent = `${usuario.name} - ${usuario.email}`;
                listaUsuarios.appendChild(li);
            });
        }

});
