import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import router from './app/router';

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'));
app.use('/', router);

export default app;