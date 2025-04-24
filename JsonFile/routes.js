import express from 'express';

var router = express.Router();

import { router as routerFromCreateFile } from './CreateFile/routes.js';
import { router as routerFromReadFile } from './ReadFile/routes.js';
import { router as routerFromDeleteFile } from './DeleteFile/routes.js';

router.use('/CreateFile', routerFromCreateFile);
router.use('/ReadFile', routerFromReadFile);
router.use('/DeleteFile', routerFromDeleteFile);

export { router };