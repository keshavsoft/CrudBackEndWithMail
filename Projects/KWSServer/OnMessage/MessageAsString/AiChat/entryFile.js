import { StartFunc as StartFuncDefaultFunc } from "./defaultFunc.js";

const StartFunc = ({ inDataAsString, inws, inClients, inChatLog, inSendFunc }) => {
    let LocalSendObject = inClients.get(inws);

    let LocalLastFind = inChatLog.findLast(element => {
        return element.id === LocalSendObject.id && element.InOut === "Out";
    });

    console.log("ahhhh : ", LocalLastFind);
    if (LocalLastFind === undefined) {
        StartFuncDefaultFunc({ inDataAsString, inSendFunc });
    } else {
        switch (LocalLastFind.data.Type) {
            case "IsStudent":
                switch (inDataAsString) {
                    case "Yes":
                        inSendFunc({ inMessage: "YourName" });

                        break;
                    default:
                        switch (inDataAsString) {
                            case "Hai":
                            case "hai":
                                console.log("aaaaaaaaaaaaaaaaa");

                                inSendFunc({ inMessage: "Hello" });

                                break;
                            default:
                                break;
                        }; break;
                }; break;
            default:
                StartFuncDefaultFunc({ inDataAsString, inSendFunc });
                break;
        };

    };
};

export { StartFunc };