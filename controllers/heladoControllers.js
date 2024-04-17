let db = require('../database/models')

// let heladoControllers = {
//    crear: function (req, res) {
// db.Helado.findAll()
// .then(function(helados){
//     return res.render('creacionHelados', {helados:helados})
// })
//    },
//    guardar: function(req, res) {
//       db.Helado.create({
//          name:req.body.name,
//          precio: req.body.precio
//       })
//       res.redirect('/helados')
//    },
//    listado: function(req, res) {
//       db.Helados.findAll()
//       .then(function(helados){
//          res.render("listadoHelados", {helados:helados})
//       })

//    },
//    detalle: function(req, res) {
//       db.Helados.findBypk(req.params.id)
//       include: [{association:'helados'}, {association:'clientes'}]
//       .then(function(helado){
//          res.render('detalleHelado', {helado:helado})
//       })
//    }
// }
const controller ={
index: async(req, res) => {
   const productos = await db.Productos.findAll()
   const clientes = await db.Clientes.findAll()
   res.json({
      productos: productos,
      clientes:clientes
   })
}}
module.exports = controller