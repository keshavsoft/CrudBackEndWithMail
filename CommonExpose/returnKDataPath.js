import { StartFunc as StartFuncFromReturnRootDir } from "./returnRootDir.js";

let StartFunc = () => {
    const file = "KData/JSON/328";
    const LocalFromRoot = StartFuncFromReturnRootDir();

    return `${LocalFromRoot}/${file}`;
};

export { StartFunc };
