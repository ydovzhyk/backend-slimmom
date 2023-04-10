const path = require("path");

const docFileDir = path.join(__dirname, "../", "public", "json_files");
const apiDocController = async (req, res) => {
    console.log("Ми тут")
    const production = "https://kapusta-server.herokuapp.com";
    const development = "http://localhost:4000";
    const url =
    process.env.NODE_ENV === "development" ? development : production;
    const docURL = `${url}/static/json_files/swagger.json`;
    res.status(200).json(docURL);
};

module.exports = {
    apiDocController,
};