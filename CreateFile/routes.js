import express from 'express';

var router = express.Router();

import { router as routerFromAsJson } from './AsJson/routes.js';

router.use('/AsJson', routerFromAsJson);

export { router };