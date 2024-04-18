let db = require('../database/models/Helados');

let heladoControllers = {
    crear: function (req, res) {
        db.Helado.findAll()
        .then(function(helados){
            return res.render('creacionHelados', {helados: helados})
        })
    },
    guardar: function(req, res) {
        db.Helado.create({
            name: req.body.name,
            precio: req.body.precio
        })
        .then(function() {
            res.redirect('/helados');
        })
        .catch(function(error) {
            console.error('Error al guardar el helado:', error);
            res.status(500).send('Error interno del servidor');
        });
    },
    listado: function(req, res) {
        db.Helados.findAll()
        .then(function(helados){
            res.render("listadoHelados", {helados: helados})
        })
        .catch(function(error) {
            console.error('Error al obtener el listado de helados:', error);
            res.status(500).send('Error interno del servidor');
        });
    },
    detalle: function(req, res) {
        db.Helados.findByPk(req.params.id, {
            include: [{association: 'helados'}, {association: 'clientes'}]
        })
        .then(function(helado){
            res.render('detalleHelado', {helado: helado})
        })
        .catch(function(error) {
            console.error('Error al obtener el detalle del helado:', error);
            res.status(500).send('Error interno del servidor');
        });
    }
};

module.exports = heladoControllers;
