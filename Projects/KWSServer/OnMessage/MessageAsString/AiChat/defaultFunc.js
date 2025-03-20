const StartFunc = ({ inDataAsString, inSendFunc }) => {
    switch (inDataAsString) {
        case "Hai":
        case "hai":
        case "hi":
        case "Hi":
            inSendFunc({ inMessage: "Hello" });

            break;
        case "ping":
        case "Ping":
        case " Ping":
        case " ping":
            inSendFunc({ inMessage: "Pong" });

            break;
        default:
            break;
    };
};

export { StartFunc };