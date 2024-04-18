let db = require('../../database/models')

module.exports ={
   listado: async (req, res) => {
      try {
         const helados = await Helados.findAll()
         res.json(helados)
      } catch (error) {
         console.log(error.message);
      }
   }
}
        let heladoControllers = {
       crear: function (req, res) {
     db.Helado.findAll()
    .then(function(helados){
        return res.render('creacionHelados', {helados:helados})
    })
       },
       guardar: function(req, res) {
          db.Helado.create({
             name:req.body.name,
             precio: req.body.precio
          })
          res.redirect('/helados')
       },
       listado: function(req, res) {
      db.Helados.findAll()
          .then(function(helados){
             res.render("listadoHelados", {helados:helados})
         })

      },
       detalle: function(req, res) {
          db.Helados.findBypk(req.params.id)
          include: [{association:'helados'}, {association:'clientes'}]
           .then(function(helado){
             res.render('detalleHelado', {helado:helado})
          })
       }
    }
// const controller ={
// index: async(req, res) => {
//    const helados = await db.Helados.findAll()
//    const clientes = await db.Clientes.findAll()
//    res.json({
//       helados: helados,
//       clientes:clientes
//    })
// }}
module.exports = heladoControllers