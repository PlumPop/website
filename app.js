const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

app.use(express.static(__dirname));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(PORT, () => {
    console.log("The app [http://localhost:" + PORT + "/] is running.");
});
