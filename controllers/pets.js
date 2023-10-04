/* eslint-disable space-before-function-paren */
import { PetModel } from '../models/pet.js'

export class PetController {
  static async getAll(req, res) {
    const { temperament, hair, animal } = req.query
    const pets = await PetModel.getAll({ temperament, hair, animal })
    // Que renderiza
    res.json(pets)
  }

  static async getById(req, res) {
    const { id } = req.params
    const pet = await PetModel.getById({ id })
    if (pet) return res.json(pet)
    // Manejar caso de no encontrar mascota
    res.status(404).json({ message: 'Pet not found' })
  }

  static async getByBreed(req, res) {
    const { breed } = req.params
    const pet = await PetModel.getByBreed({ breed })
    if (pet) return res.json(pet)
    // Manejar caso de no encontrar mascota
    res.status(404).json({ message: 'Race not found' })
  }

  // Traer por tipo de mascota
  static async getByPet(req, res) {
    const { animal } = req.params
    const pet = await PetModel.getPetPet({ animal })
    if (pet) return res.json(pet)
    // Manejar caso de no encontrar mascota
    res.status(404).json({ message: 'Type not found' })
  }
}
