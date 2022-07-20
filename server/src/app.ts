import express, { Express } from 'express';
import cors from 'cors'

class App {
    server: Express;

    constructor() {
        this.server = express();

    }

    Cors(): void {
        this.server.use(cors());
    }

    AllowJSON(): void {
        this.server.use(express.json());
    }
}

export default new App().server;