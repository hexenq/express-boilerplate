import base from './config.base';
import dev from './config.dev';
import prod from './config.prod';

var env = process.env.NODE_ENV || 'development';

const config = {
    development: Object.assign(dev, base),
    production: Object.assign(prod, base)
}[process.env.NODE_ENV || 'development'];

export function getEnv() {
    return env;
};

export default config;