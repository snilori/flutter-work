import axios from 'axios'
import * as ENDPOINTS from './endPoint'
export default class EventServices {
  static async events () {
    try {
      let {data} = await axios.get(ENDPOINTS.EVENTS)
      return data
    } catch (err) {
      console.log(err)
    }
  }

  static async getIndividualEvent (id) {
    try {
      let eventId = id.id
      let {data} = await axios.get(ENDPOINTS.SINGLE_EVEN(eventId))
      console.log(data)
      return data
    } catch (err) {
      console.log(err)
    }
  }
}
