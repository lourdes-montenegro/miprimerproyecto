module.exports = function (sequelize, dataTypes) {
    let alias = "Helado";
    let cols = {
        id_producto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        precio: {
            type: DataTypes.DECIMAL
        },
        descripcion: DataTypes.STRING
    }
    let config = {
        tableName: "productos",
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