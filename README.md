# videoderify
A video streaming platform made just for fun, out of curiosity and for learning purposes.
You can upload serieses and then watch them anywhere, anytime on anything as it is a web-based self-hosted SPA.<br>
More features are yet to be implemented :)

### STACK: MEVN
- Client: VueJS
- API: ExpressJS, MongoDB, web-server of your choice

You can find the [API here](https://github.com/anymus0/videoderify-API/)!

If you have any suggestions feel free to make a pull request, or just modify the project for your needs!

#### Homepage background
To change the homepage background, change the *background-image* css property of the *#home* id inside **HomeComp.vue**

#### Set the API server
In order for the application to read/write data from/to the server we need to define the API's *protocol* (http/https), *address* (IP or domain), and *port*. <br>
You can define these settings in the **APIserver** object inside **fetch/Fetchy.js**.

## Project setup
Install with *--legacy-peer-deps* for compatibility with legacy version of packages!
```
npm i --legacy-peer-deps
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
