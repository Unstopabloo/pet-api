import { Router } from 'express'
import { PetController } from '../controllers/pets.js'

export const petsRouter = Router()

// Obtener todas las mascotas o filtradas
petsRouter.get('/', PetController.getAll)
// Obtener mascota especifica por id
petsRouter.get('/:id', PetController.getById)
// Obtener mascota por raza especifica
petsRouter.get('/breed/:breed', PetController.getByBreed)
