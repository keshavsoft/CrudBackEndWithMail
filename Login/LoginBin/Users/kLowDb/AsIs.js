import { StartFunc as StartFuncReturnDbObject } from "./CommonFuncs/ReturnDbObject.js";

let StartFunc = ({ inInsertData }) => {

    let LocalInsertdata = inInsertData;

    let LocalUsername = LocalInsertdata.UserName;
    let LocalPassword = LocalInsertdata.Password;

    let LocalReturnData = { KTF: false }

    let LocalFromLowDb = StartFuncReturnDbObject();

    LocalFromLowDb.read();

    if ("error" in LocalFromLowDb.data) {
        LocalReturnData.err = LocalFromLowDb.data.error;
        return LocalReturnData;
    };

    if (LocalFuncCheckInData({ inUsername: LocalUsername, inLowDb: LocalFromLowDb })) {
        LocalReturnData.KReason = "UserName Already Exists";
        return LocalReturnData;
    };

    let LocalObject = LocalFuncPrepareObject({ inInsertData: LocalInsertdata });

    LocalFromLowDb.data.push(LocalObject);
    LocalFromLowDb.write();

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalObject.UuId;

    return LocalReturnData;
};

let LocalFuncCheckInData = ({ inUsername, inLowDb }) => {

    let LocalUsername = inUsername;

    let LocalFromLowDb = inLowDb;

    let LocalFindData = LocalFromLowDb.data.find(e => e.UserName == LocalUsername)

    if (LocalFindData === undefined) {
        return false;
    };

    return true;
};

let LocalFuncPrepareObject = ({ inInsertData }) => {

    let LocalUuId = uuidv4();

    inInsertData.isMailValidated = false;
    inInsertData.UuId = LocalUuId;

    return inInsertData;
};

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

export { StartFunc };
