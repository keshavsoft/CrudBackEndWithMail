import express from 'express';

var router = express.Router();

import { router as Create } from './Create/routes.js';
import { router as Show } from './Show/routes.js';
import { router as Bulk } from './Bulk/routes.js';
import { router as ShowWithColumns } from './ShowWithColumns/routes.js';
import { router as Search } from './Search/routes.js';
import { router as UploadImage } from './UploadImage/routes.js';
import { router as Alter } from './Alter/routes.js';
import { router as Images } from './Images/routes.js';
import { router as AggrFuncs } from './AggrFuncs/routes.js';
import { router as SelectedColumns } from './SelectedColumns/routes.js';
import { router as GroupByColumn } from './GroupByColumn/routes.js';
import { router as ShowGet } from './ShowGet/routes.js';
import { router as BulkPost } from './BulkPost/routes.js';
import { router as Upload } from './Upload/routes.js';
import { router as UploadImageAsBase64 } from './UploadImageAsBase64/routes.js';
import { router as RowShow } from './RowShow/routes.js';

router.use('/Create', Create);
router.use('/Show', Show);
router.use('/Bulk', Bulk);
router.use('/ShowWithColumns', ShowWithColumns);
router.use('/Search', Search);
router.use('/UploadImage', UploadImage);
router.use('/Alter', Alter);
router.use('/Images', Images);
router.use('/AggrFuncs', AggrFuncs);
router.use('/SelectedColumns', SelectedColumns);
router.use('/GroupByColumn', GroupByColumn);
router.use('/ShowGet', ShowGet);
router.use('/BulkPost', BulkPost);
router.use('/Upload', Upload);
router.use('/UploadImageAsBase64', UploadImageAsBase64);
router.use('/RowShow', RowShow);

export { router };