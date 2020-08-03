const APIserver = {
  Protocol: "http",
  Address: "0.0.0.0",
  Port: 0
}

class Fetchy {
  static async Get (endpoint) {
    try {
      // get the full request link
      const link = `${APIserver.Protocol}://${APIserver.Address}:${APIserver.Port}/${endpoint}`

      // start fetching
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

  static async PostFiles (endpoint, form) {
    try {
      // get the full request link
      const link = `${APIserver.Protocol}://${APIserver.Address}:${APIserver.Port}/${endpoint}`

      // define request options
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: form
      }

      // start fetching
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
