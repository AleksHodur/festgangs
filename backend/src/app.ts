import express, { Express, Request, Response, NextFunction } from "express";
import mongoose from "mongoose"

const app: Express = express();

const port: number = 4000;
const dbConnection: string = "mongodb+srv://dev:dev-password@festgangs-db.qawttms.mongodb.net/?retryWrites=true&w=majority&appName=festgangs-db";

//connect to db
mongoose.connect(dbConnection)
    .then(() => {
        //listen for request
        app.listen(port, () => {
            console.log('connected to db & listening on port ', port);
        });
    })
    .catch((error: Error) => {
        console.log(error);
    });

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('Request received: ', req.url);
    next();
});

app.get('/', (req: Request, res: Response) => {
    res.send("Hi! This is server listening :)");
});

app.get('/hey', (req: Request, res: Response) => {
    res.send("Heyyyy! what uuuuup :)");
});