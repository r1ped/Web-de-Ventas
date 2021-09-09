import expres from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import Discord from 'discord.js';
import cors from 'cors';

const app = express();
const webhook = "https://discord.com/api/webhooks/884458256234344490/s5-QqC4nJdXCZmIz1Y5ZdS4aXfHfPsQWp3DGqAwjLDG9tkIA5vg_uBSPP3gvSRO2Hmnf"

const conexion_uri = "";

setTimeout(async function() {
	await mongoose.connect(conexion_uri,{useNewUrlParser: true, useUnifiedTopology: true}).then( db => 
		 console.log("Base de Datos conectada correctamente."))
	  .catch((err) => console.log("Hubo un error al conectarse a la base de Datos."));
}, 1000);

app.use(morgan('dev'));

var listablanca = [
 'https://www.trading-op.com', 
 'https://trading-op.com'
 ];

var ops = {
	origin: function (origin, callback) {
		if (listablanca.indexOf(origin) !== -1) {
			callback(null, true)
		} else {
			return false;
		}
	}
}

app.use(cors(ops));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit: '50mb'}));

import Products './routes/products';

app.use(products);
	
app.listen(8080, () => {
	console.log('Servidor iniciado correctamente en el puerto 8080');
});


