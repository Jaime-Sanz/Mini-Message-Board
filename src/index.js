import express from 'express';
import messageRoutes from './routes/messageRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));


app.use("/", messageRoutes);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})