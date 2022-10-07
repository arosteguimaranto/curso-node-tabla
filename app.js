const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

               
// option('l')
//listar
//boolean 
//default: false


console.clear();



crearArchivo( argv.b, argv.l, argv.h)
.then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
.catch( err => console.log(err) );

// fs.WriteFileSync es mas facil pero tendriamos que atraparlo en un try catch