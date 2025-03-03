const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');


let rolesValidos = {
	values: ['ADMIN_ROLE', 'USER_ROLE'],
	message: '{VALUE} no es un rol valido'
}

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
	nombre: {
		type: String,
		required: [true, "El nombre es obligatorio."],
	},
	email: {
		type: String,
		required: [true, "El email es obligatorio"],
		unique: true
	},
	password: {
		type: String,
		required: [true, "La contraseña es obligatoria"],
	},
	img: {
		type: String,
		required: false,
	},
	role: {
		type: String,
		enum: rolesValidos,
		default: "USER_ROLE",
	},
	estado: {
		type: Boolean,
		default: true,
	},
	google: {
		type: Boolean,
		default: false,
	},
});

usuarioSchema.methods.toJSON = function () {
	let user = this;
	let userObject = user.toObject();
	delete userObject.password;

	return userObject;
}

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único.' });


module.exports = mongoose.model('Usuario', usuarioSchema);