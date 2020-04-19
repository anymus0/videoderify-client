class Fetchy {
  static async getSeries (id) {
    try {
      const response = await window.fetch(`http://localhost:3000/serieses/${id}`)
      if (!response.ok) {
        throw response.status
      }
      const data = await response.json()
      return data
      // Catch Error
    } catch (err) {
      console.log('OOPS! Error requesting the requests that were requested with the requests :(')
      return err
    }
  }

  static async getAllSeries () {
    try {
      const response = await window.fetch('http://localhost:3000/serieses')
      if (!response.ok) {
        throw response.status
      }
      const data = await response.json()
      return data
      // Catch Error
    } catch (err) {
      console.log('OOPS! Error requesting the requests that were requested with the requests :(')
      return err
    }
  }
}

export { Fetchy }
