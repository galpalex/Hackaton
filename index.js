import express from 'express';
import mongoose from 'mongoose';
import { MONGOOSE_URI, CorsConfig } from './config.js'
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { placesRouter } from './routes/routes.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();

app.use(cors(CorsConfig))
app.use(express.json());


const publicPath = path.join(__dirname, './client/build');

app.use(express.static(publicPath));


app.use('/', placesRouter)


mongoose.connect(MONGOOSE_URI, () => {
    console.log(`Connected to ${MONGOOSE_URI}`)
});

const port = process.env.PORT || 8080
app.listen(port, ()=> {
    console.log('Wazzzaaap');
});







export { app };