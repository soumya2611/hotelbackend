import express from "express"
import db from './db.js'
 import bodyParser from "body-parser"
const app = express()
app.use(bodyParser.json())
const PORT=3000
app.get("/", (req,res) => {
res.send("hello to the backend of hotel ")
})
//Import the router files
/**  PERSON */
import personRouter from './routes/personRoute.js'
app.use('/person',personRouter)

/** MENU */
import menuRoutes from './routes/menuRoutes.js'
app.use('/menu',menuRoutes)

app.listen(PORT,console.log(`running on port${PORT}`))
