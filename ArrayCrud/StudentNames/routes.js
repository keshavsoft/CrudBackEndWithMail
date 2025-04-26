import express from 'express';

var router = express.Router();

import { router as ReadContent } from './ReadContent/routes.js';

router.use('/ReadContent', ReadContent);

export { router };