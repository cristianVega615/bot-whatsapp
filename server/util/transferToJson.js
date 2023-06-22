const {createJSON} = require("./createJSONflows")

const transferToDataJson = (socket) => {
    socket.on("flows", (flows_object) => {
        console.log(flows_object)
        createJSON(flows_object)
    })
}

module.exports = {
    transferToDataJson
}