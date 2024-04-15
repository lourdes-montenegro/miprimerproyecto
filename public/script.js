document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3002/helados') // poner la ruta correcta de la API
      .then(response => response.json())
      .then(data => {
        const heladosContainer = document.getElementById('helados-container');
        heladosContainer.innerHTML = '';
  
        data.forEach(helado => {
          const heladoDiv = document.createElement('div');
          heladoDiv.classList.add('helado');
          heladoDiv.innerHTML = `
            <h3>${helado.sabor}</h3>
            <p>Precio: $${helado.precio}</p>
          `;
          heladosContainer.appendChild(heladoDiv);
        });
      })
      .catch(error => {
        console.error('Error al obtener los helados:', error);
      });
  });
document.addEventListener('DOMContentLoaded', () => {
    // Obtener todos los botones de comprar
    const comprarButtons = document.querySelectorAll('.comprar-btn');

    // Agregar un contador para el carrito
    let carritoCount = 0;

    // Obtener el elemento del contador de carrito
    const carritoCountElement = document.getElementById('carrito-count');

    // Obtener el elemento de la lista del carrito
    const listaCarrito = document.getElementById('lista-carrito');

    // Iterar sobre cada botón
    comprarButtons.forEach(button => {
        // Agregar un listener de click a cada botón
        button.addEventListener('click', () => {
            // Incrementar el contador del carrito
            carritoCount++;
            
            // Actualizar el texto del contador de carrito
            carritoCountElement.textContent = carritoCount;

            // Crear un elemento de lista para el producto
            const productoItem = document.createElement('li');
            productoItem.textContent = 'Producto agregado';
            listaCarrito.appendChild(productoItem);

            // agregar más lógica para la compra, como agregar el producto al carrito
            // mostraremos un mensaje de compra exitosa
            alert('Producto agregado al carrito');
        });
    });
});
