import express from 'express';
import router from './routes/index.js';

export const app = express();

app.use(express.static('views'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', router);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port: ${server.address().port}`);
});
server.on('error', error => console.log(`error running server: ${error}`));


