import express from 'express';
import controller from './controller';
import utils from './utils';
import errors from './errors';

const router = express.Router();

router.get('/hello', controller.greeting);

router.use(function (err, req, res, next) {
    res.status(500).json(utils.errorRes(err));
});

router.use(function (req, res, next) {
    res.status(404).json(utils.errorRes(errors.notFound));
});

export default router;