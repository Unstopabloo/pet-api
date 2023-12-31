import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:8888',
  'http://localhost:5500',
  'http://localhost:1234',
  'http://localhost:3000',
  'http://localhost:5137',
  'http://127.0.0.1:5500',
  'http://127.0.0.1:1234',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:5137',
  '*'
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes('*') || acceptedOrigins.includes(origin)) {
        return callback(null, true)
      }

      if (!origin) {
        return callback(null, true)
      }

      return callback(new Error('Not allowed by CORS'))
    }
  })
