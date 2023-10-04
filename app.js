import express, { json } from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { petsRouter } from './routes/pets.js'

const app = express()

app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

// Usa la direccion pets y concatena con lo que encuentre en routes
app.use('/pets', petsRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Server listen on port: http://localhost:${PORT}`)
})
