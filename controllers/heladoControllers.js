let db = require('../database/models');

let heladoControllers = {
    create: function (heladoData) {
		let allHelados = this.findAll();
		let newHelado = {
			id: this.generateId(),
			...heladoData
		}
		allHelados.push(newHelado);
		fs.writeFileSync(this.fileName, JSON.stringify(allHelados, null, ' '));
		return newHelado;
	},
    
    guardar: async (req, res) => {
        try {
            await db.Helado.create({
                nombre: req.body.nombre,
                precio: req.body.precio,
                stock: req.body.stock,
                imagen: req.body.imagen
            });
            res.redirect('/'); 
        } catch (error) {
            console.error('Error al guardar el helado:', error);
            res.status(500).send('Error interno del servidor');
        }
    },
    listado: async (req, res) => {
        try {
            const helados = await db.Helado.findAll();
            res.render("listadoHelados", { helados: helados });
        } catch (error) {
            console.error('Error al obtener el listado de helados:', error);
            res.status(500).send('Error interno del servidor');
        }
    },
    detalle: async (req, res) => {
        try {
            const helado = await db.Helado.findByPk(req.params.id, {
                include: [{ association: 'helados' }, { association: 'clientes' }]
            });
            if (!helado) {
                return res.status(404).send('Helado no encontrado');
            }
            res.render('detalleHelado', { helado: helado });
        } catch (error) {
            console.error('Error al obtener el detalle del helado:', error);
            res.status(500).send('Error interno del servidor');
        }
    },
    
	delete: async (id) => {
        
		let allHelados = this.findAll();
		let finalHelados = allHelados.filter(oneHelado => oneHelado.id !== id);
		fs.writeFileSync(this.fileName, JSON.stringify(finalHelados, null, ' '));
		return true;
	},
    editProduct: async (req, res) => {
        const productId = req.params.id;
        const { nombre, precio, imagen } = req.body;
    
        try {
            // Buscar el producto por su ID en la base de datos
            const product = await db.Helado.findByPk(productId);
    
            // Si el producto no existe, retornar un error
            if (!product) {
                return res.status(404).send('Producto no encontrado');
            }
    
            // Actualizar los campos del producto con los nuevos datos
            product.nombre = nombre;
            product.precio = precio;
            product.imagen = imagen;
    
            // Guardar los cambios en la base de datos
            await product.save();
    
            // Redirigir al usuario a la página de listado de helados
            res.redirect('/listado-helados');
        } catch (error) {
            console.error('Error al editar el producto:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    
    
};

module.exports = heladoControllers;
