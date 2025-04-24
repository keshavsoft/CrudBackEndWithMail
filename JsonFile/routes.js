import express from 'express';

var router = express.Router();

import { router as routerFromCreateFile } from './CreateFile/routes.js';
import { router as routerFromReadFile } from './ReadFile/routes.js';

router.use('/CreateFile', routerFromCreateFile);
router.use('/ReadFile', routerFromReadFile);

export { router };