import express from "express"
import http from "http"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import compression from "compression"
import cors from "cors"
import mongoose from "mongoose"

const app = express()

app.use(cors({
    credentials: true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(8000, () => {
    console.log("Server is running on port http://localhost:8000")
})

const MONGO_URL = "mongodb://localhost/my-app"

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on("error", (error: Error) => console.log(error))
mongoose.connection.once("open", () => console.log("Connected to MongoDB"))

app.get("/", (req, res) => {
    res.send("Hello World!")
})