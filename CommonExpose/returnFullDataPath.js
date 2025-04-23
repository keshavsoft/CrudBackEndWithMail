import { StartFunc as StartFuncFromReturnRootDir } from "./returnRootDir.js";

let StartFunc = () => {
    const file = "KData/JSONForAny";
    const LocalFromRoot = StartFuncFromReturnRootDir();

    return `${LocalFromRoot}/${file}`;
};

export { StartFunc };
