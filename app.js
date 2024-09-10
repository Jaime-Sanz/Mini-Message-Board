import express from 'express';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import homeRouter from './src/routes/homeRoute.js';
import newMessageRouter from './src/routes/newMessageRoute.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/new', newMessageRouter);

app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.status || 500;
  res.status(statusCode).json({ error: err.message || 'Something went wrong!' });
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running!`);
  });

  //testing