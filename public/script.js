document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/api/helados') // Ruta correcta de la API para productos
    .then(response => response.json())
    .then(data => {
      const productosContainer = document.getElementById('productos-container');
      productosContainer.innerHTML = '';

      data.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto'); // Cambiado de 'helado' a 'producto'
        productoDiv.innerHTML = `
          <h3>${producto.sabor}</h3> <!-- Cambiar 'sabor' por el nombre del campo correcto -->
          <p>Precio: $${producto.precio}</p>
        `;
        productosContainer.appendChild(productoDiv);
      });
    })
    .catch(error => {
      console.error('Error al obtener los productos:', error);
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
          productoItem.textContent = 'Producto agregado'; // Cambiar 'Producto agregado' por un mensaje apropiado
          listaCarrito.appendChild(productoItem);

          // agregar más lógica para la compra, como agregar el producto al carrito
          // mostraremos un mensaje de compra exitosa
          alert('Producto agregado al carrito');
      });
  });
});
