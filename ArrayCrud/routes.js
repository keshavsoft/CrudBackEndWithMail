import express from 'express';

var router = express.Router();

import { router as RouterForStudentNames } from './StudentNames/routes.js';

router.use('/StudentNames', RouterForStudentNames);

export { router };