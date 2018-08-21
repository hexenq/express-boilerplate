import base from './config.base';
import dev from './config.dev';
import prod from './config.prod';

const config = {
    dev: Object.assign(dev, base),
    prod: Object.assign(prod, base)
}[process.env.NODE_ENV || 'dev'];

export default config;