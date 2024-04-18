const fs = require('fs');
const { Sequelize, DataTypes } = require('sequelize');

// Configurar la conexión a la base de datos
const sequelize = new Sequelize('proyecto-helados', 'root', null, {
  host: 'localhost',
  dialect: 'mysql', 
});

// Definir el modelo Helado
const Helado = sequelize.define('Helado', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

// Leer el archivo JSON de helados
fs.readFile('helados.json', 'utf8', async (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  try {
    const helados = JSON.parse(data);

    // Sincronizar el modelo con la base de datos
    await Helado.sync();

    // Crear cada helado en la base de datos
    for (const helado of helados) {
      await Helado.create({
        nombre: helado.nombre,
        precio: helado.precio,
        descripcion: helado.descripcion
      });
    }

    console.log('Datos de helados cargados correctamente en la base de datos.');
  } catch (error) {
    console.error('Error al cargar los datos de helados en la base de datos:', error);
  }

  // Cerrar la conexión a la base de datos
  sequelize.close();
});
