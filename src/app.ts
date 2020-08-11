//
import express from "express"

class App {

    public app: express.Application

    public constructor() {

        this.app = express()

    }

    private middlewares() {

        this.app.use(express.json())

    }

    private routes() {

    }

}

export default new App().app
