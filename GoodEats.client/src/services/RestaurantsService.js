import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class RestaurantsService {
  async getAll() {
    const res = await api.get('api/restaurants')
    AppState.restaurants = res.data
  }

  async setActive(restaurant) {
    AppState.activeRestaurant = restaurant
    const res = await api.get(`api/restaurants/${restaurant.id}/reviews`)
    AppState.reviews = res.data
  }
}

export const restaurantsService = new RestaurantsService()