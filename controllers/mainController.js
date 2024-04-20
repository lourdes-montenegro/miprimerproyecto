const db = require('../database/models');

const controller = {
    index: async (req, res) => {
     const helados=  await db.Helados.findAll()
     const clientes = await  db.Clientes.findAll()
     res.json({
        helados: helados,
        clientes: clientes
     })
        // return res.render ('index')
    }

}
