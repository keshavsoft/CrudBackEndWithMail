import { StartFunc as ReadFromFile } from '../../kLowDb/deleteFile.js';

let GetFunc = ({ inFileName }) => {
    let LocalFromLowDb = ReadFromFile({ inFileName });

    return LocalFromLowDb;
};

export {
    GetFunc
};