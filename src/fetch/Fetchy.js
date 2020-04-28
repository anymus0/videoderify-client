// REWORK: write post and get once, ue parameters!
class Fetchy {
  static async Get (link) {
    try {
      const response = await window.fetch(link)
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

  static async Post (link, obj) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      }
      const response = await window.fetch(link, options)
      const data = await response.json()
      return data
    } catch (err) {
      console.log(`Could not POST, ERROR:  ${err}`)
      return err
    }
  }
}

export { Fetchy }
