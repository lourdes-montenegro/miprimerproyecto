const { Helado } = require('../models/Helados'); // Importa el modelo Helado

// Función para seedear la base de datos con helados
async function seedHelados() {
    try {
        // Array con los datos de los 10 sabores de helados
        const heladosData = [
            { name: 'Chocolate', precio: 2.5, descripcion: 'Delicioso helado de chocolate' },
            { name: 'Vainilla', precio: 2.0, descripcion: 'Clásico helado de vainilla' },
            { name: 'Fresa', precio: 3.0, descripcion: 'Refrescante helado de fresa' },
            { name: 'Menta', precio: 2.8, descripcion: 'Refinado helado de menta' },
            { name: 'Limón', precio: 2.3, descripcion: 'Tangy helado de limón' },
            { name: 'Café', precio: 3.5, descripcion: 'Intenso helado de café' },
            { name: 'Nuez', precio: 3.2, descripcion: 'Crunchy helado de nuez' },
            { name: 'Coco', precio: 2.7, descripcion: 'Tropical helado de coco' },
            { name: 'Almendra', precio: 3.2, descripcion: 'Exquisito helado de almendra' },
            { name: 'Pistacho', precio: 3.0, descripcion: 'Rico helado de pistacho' }
        ];

        // Crear los helados en la base de datos
        await Helado.bulkCreate(heladosData);

        console.log('Seeding completado. Helados agregados correctamente.');
    } catch (error) {
        console.error('Error en el seeding:', error);
    }
}

// Llamar a la función para seedear los helados
seedHelados();
