const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
var uniqueValidator = require('mongoose-unique-validator');
const cursoSchema = new Schema({
	nombre:{
		type : String,
		require: true
	},
	idCurso :{
		type: Number,
		require: true,
		unique: [true, "el id ya existe"]
	},
	descripcion:{
		type:String,
		require: true
	},
	valor:{
		type:Number,
		require: true
	},
	modalidad:{
		type:String,
		enum: { values: ['virtual', 'presencial'] }
	},
	intensidadHoraria:{
		type:Number
	},
	estado:{
		type:String,
		default: 'disponible'
	}
});
cursoSchema.plugin(uniqueValidator);
const Curso = mongoose.model('Curso',cursoSchema);

module.exports = Curso