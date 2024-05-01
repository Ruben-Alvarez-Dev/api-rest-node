import express from 'express';
import fs from 'fs';

const app = express();

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
    res.send(data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

 