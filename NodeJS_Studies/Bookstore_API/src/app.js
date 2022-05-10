import express from "express";
import db from "./config/dbConnect.js"
import books from "./models/Book.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Connection Error'))
db.once("open", () => {
    console.log('DB successfully connection!');
})

const app = express();

app.use(express.json());

routes(app);


app.get('/books/:id', (req, res) => {
    let index = getBook(req.params.id);
    res.json(books[index]);
})


app.put('/books/:id', (req, res) => {
    let index = getBook(req.params.id);
    books[index].title = req.body.title;
    res.json(books);
})

app.delete('/books/:id', (req, res) => {
    let {id} = req.params;
    let index = getBook(id);
    books.splice(index, 1);
    res.send(`Book ${id} successfully deleted`);
})


function getBook(id){
    return books.findIndex(books => books.id == id)
}

export default app;