
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar, hasta ) => {

    try {
        console.log('============='.blue);
        console.log(' Tabla del'.white, colors.red(base) );
        console.log('============='.blue);

        let salida, consola = '';

        for( let i = 1; i <= hasta; i++ ){
            salida += (`${ base } ${ 'x'.blue } ${ i } = ${ base * i  }\n`);
            consola += (`${ base } x ${ i } = ${ base * i  }\n`);
        }

        if( listar ){
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        return err;
    }

}


module.exports = {
    crearArchivo
}