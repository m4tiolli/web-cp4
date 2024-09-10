import express from 'express'
import usuarioRoutes from './routes/usuarios.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", usuarioRoutes)

app.listen(8800)