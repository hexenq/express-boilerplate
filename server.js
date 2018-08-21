import app from './app.js';
import config from './config';

app.listen(config.port);
console.info(`app listening on ${config.port} in ${config.env}`);

process.on('exit', (code) => {
    console.info(`About to exit with code: ${code}`);
});

process.on('uncaughtException', (err) => {
    console.error(`Uncaught Exception: ${err}`);
});