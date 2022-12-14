const express = require("express")
const path = require("path")

let initialPath = path.join(_dirname, "public")

let app = express()
app.use(express.static(initialPath))

app.get("/", (req, res) => {
    res.sendFile(path.join(initialPath, "index.html"))
})