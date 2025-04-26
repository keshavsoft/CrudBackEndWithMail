import fs from "fs";
import { StartFunc as StartFuncFromCommonExpose } from "../../../../CommonExpose/returnKDataPath.js";
const CommonFileName = "StudentNames.json";

let StartFunc = () => {
    const RootPath = StartFuncFromCommonExpose();

    const filePath = `${RootPath}/${CommonFileName}`;

    let LocalReturnData = { KTF: false };

    try {
        const data = fs.readFileSync(filePath, 'utf8');

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = data;

    } catch (err) {
        if (err.code === 'EEXIST') {
            console.log('File already exists.');
        } else {
            console.error('Error creating file:', err);
        }
    };

    // fs.writeFileSync(`${LocalDataPath}/${LocalFileName}`, JSON.stringify({}));

    return LocalReturnData;
};

export { StartFunc };
