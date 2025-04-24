import { StartFunc as ReadFromdeleteFile } from '../../kLowDb/deleteFile.js';

let GetFunc = ({ inFileName }) => {
    let LocalFromLowDb = ReadFromdeleteFile({ inFileName });

    return LocalFromLowDb;
};

export {
    GetFunc
};