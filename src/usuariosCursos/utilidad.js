const {argv} = require('./usuariosCursosYargs');
const funciones = require ('./funcionesUsuariosCursos');

let comando = argv._[0];

if(argv._[0]=='crear'){
	funciones.crear(argv);
}