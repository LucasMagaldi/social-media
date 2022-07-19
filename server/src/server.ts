import express, { Express } from 'express';

const server = express();

server.listen(3000, () => {
    console.log("RUNNING")
})