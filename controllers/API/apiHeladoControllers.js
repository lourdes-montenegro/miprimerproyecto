const db = require('../../database/models')
const Op = db.Sequelize.Op

const Helado = db.Helado

module.exports = {
    listado: async (req, res) => {
        try {
            const helados = await Helado.findAll()
            // console.log(movies);
            const result = {
                meta: {
                    status: 200,
                    count: helados.length,
                    url: '/api/helados',
                    method: 'GET'
                },
                data: helados
            }
            res.json(result)
        } catch (error) {
            console.log(error.message)
        }
    },
    detalle: (req, res) => {
        db.Helado.findByPk(req.params.id)
            .then((helado) => {
                if (helado) {
                    const result = {
                        meta: {
                            status: 200,
                            url: '/api/helados/detail/' + req.params.id,
                            method: 'GET'
                        },
                        data: helado
                    }
                    res.json(result)
                } else {
                    res.send('No existe')
                }
            })
            .catch(error => console.log(error.message))
    },
    new: (req, res) => {
        db.Helado.findAll({
            order: [
                ['release_date', 'DESC']
            ]
        })
            .then(helados => {
                res.json(helados)
            })
            .catch(error => console.log(error.message))
    },
    crear: (req, res) => {
        console.log(req.body);
        res.json(req.body)
    }
}