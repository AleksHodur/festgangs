import express from "express";
const app = express();
const port = 4000;
app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});
app.use((req, res, next) => {
    console.log('Request received: ', req.url);
    next();
});
app.get('/', (req, res) => {
    res.send("Hi! This is server listening :)");
});
