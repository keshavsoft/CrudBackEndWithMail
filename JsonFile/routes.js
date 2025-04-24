import express from 'express';

var router = express.Router();

import { router as routerFromCreateFile } from './CreateFile/routes.js';

router.use('/CreateFile', routerFromCreateFile);

export { router };