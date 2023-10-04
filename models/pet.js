/* eslint-disable space-before-function-paren */
import { readJSON } from '../utils/utils.js'
const pets = readJSON('../pets.json')

export class PetModel {
  static async getAll({ temperament, hair, animal }) {
    // Variable en la que se guardara la response
    let filteredPet = pets
    // Retorna las mascotas filtradas por temperamento
    if (temperament) {
      filteredPet = filteredPet.filter(pet =>
        pet.temperament.some(t => t.toLowerCase() === temperament.toLowerCase())
      )
    }
    // Recuperar por tipo de pelo
    if (hair) {
      filteredPet = filteredPet.filter(
        pet => pet.hair.type.toLowerCase() === hair.toLowerCase()
      )
    }
    // Recuperar por tipo de animal
    if (animal) {
      filteredPet = filteredPet.filter(
        pet => pet.animal.toLowerCase() === animal.toLowerCase()
      )
    }

    return filteredPet
  }

  // Traer por id
  static async getById({ id }) {
    const pet = pets.find(pet => pet.id === id)
    if (pet) return pet
  }

  // Traer raza especifica
  static async getByBreed({ breed }) {
    const pet = pets.find(
      pet => pet.breed.toLowerCase() === breed.toLowerCase()
    )
    if (pet) return pet
  }
}
