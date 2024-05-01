import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const readData = () => {
    try {
        const data = fs.readFileSync('./db.json');
        /* console.log(JSON.parse(data)); */
        return JSON.parse(data);
    } catch (error) {
        console.log('Error:', error);        
    }
};

const writeData = (data) => {
    try {
        fs.writeFileSync('./db.json', JSON.stringify(data));
    } catch (error) {
        console.log('Error:', error);        
    }

}

app.get("/", (req, res) => {
    res.send(' / Working');
    
});

app.get('/books', (req, res) => {
    const data = readData();
    res.send(data.books);
});

app.get('/books/:id', (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const book = data.books.find(book => book.id === id);
    res.json(book);
});

app.post('/books', (req, res) => {
    const data = readData();
    const body = req.body;
    const newBook = {
        id: data.books.length + 1,
        ...body,
    };
    data.books.push(newBook);
    writeData(data);
    res.json(newBook);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

 