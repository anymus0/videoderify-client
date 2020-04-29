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

  static async PostFiles (link, form) {
    try {
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: form
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
