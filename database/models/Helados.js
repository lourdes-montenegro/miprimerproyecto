module.exports = function (sequelize, DataTypes) {
    let alias = "Helado";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        precio: {
            type: DataTypes.DECIMAL
        },
        descripcion:{ 
            type:DataTypes.STRING
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }

    let config = {
        tableName: "helados",
        timestamps: false
    }
    let Helado = sequelize.define(alias, cols, config);
    Helado.associate = function (models) {
        Helado.belongsToMany(models.Cliente, {
            as: "clientes",
            through: "carrito",
            foreignKey: "id_helado",
            timestamps: false
        })
    }

    
    return Helado
}