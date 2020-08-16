//
import express from "express"

import router from "./routers/index.router"

class App {

    public app: express.Application

    public constructor() {

        // Creting express app
        this.app = express()
        // Middlewares functions
        this.middlewares()
        // Express routes
        this.applyRoutes()
    }

    private middlewares() {

        //
        this.app.use(express.json())

    }

    //
    private applyRoutes() {
        // Applying all routers from index file
        this.app.use(router)
    }

}

export default new App().app
