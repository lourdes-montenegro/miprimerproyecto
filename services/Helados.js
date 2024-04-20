
const fs = require('fs');

const Helado = {
	fileName: './dbJSON/helados.json',

	getData: function () {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
	},

	generateId: function () {
		let allHelados = this.findAll();
		let lastHelado = allHelados.pop();
		if (lastHelado) {
			return lastHelado.id + 1;
		}
		return 1;
	},

	findAll: function () {
		return this.getData();
	},

	findByPk: function (id) {
		let allHelados = this.findAll();
		let heladoFound = allHelados.find(oneHelado => oneHelado.id === id);
		return heladoFound;
	},

}

module.exports = Helado;