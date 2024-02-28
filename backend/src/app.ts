import express, { Express, Request, Response, NextFunction } from "express";

const app: Express = express();

const port: number = 4000;

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
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