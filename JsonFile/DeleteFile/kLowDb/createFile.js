import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnFullDataPath.js";

let StartFunc = ({ inFileName }) => {
    const LocalFileName = inFileName;
    const LocalDataPath = StartFuncCommonExpose();

    let LocalReturnData = { KTF: false };
    const filePath = `${LocalDataPath}/${LocalFileName}.json`;

    try {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            LocalReturnData.KTF = true;
            console.log(`${LocalFileName}.json has been successfully deleted.`);
        } else {
            console.warn(`File ${LocalFileName}.json does not exist.`);
        }
    } catch (err) {
        console.error(`Error deleting ${LocalFileName}.json:`, err.message);
    }

    return LocalReturnData;
};

export { StartFunc };
