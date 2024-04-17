module.exports = function (sequelize, dataTypes) {
    let alias = "Cliente";
    let cols = {
        id: {
             type: DataTypes.INTEGER,
             primaryKey: true
        } ,
        name: {
            type:DataTypes.STRING
        },
        email: {
            type:DataTypes.STRING
        }
    }
    let config = {
        tableName: "clientes",
        timestamps: false
    }
    let Cliente = sequelize.define(alias, cols, config);

    Cliente.associate = function(models) {
        Cliente.belongsToMany(models.Helado, {
            as: "helados", 
            through: "carrito",
            foreignKey: "id_cliente" 
        });
    };
    
    return Cliente
}