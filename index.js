import express from 'express';
import cors from 'cors';


const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173/',
    methods: ['GET', 'POST'],
}));
let products = [
    {
        id: 1,
        name: 'Dell Laptop',
        imageURL: "",
        price: 10.99,
        description: 'This is Dell Laptop',
    },

    {
        id: 2,
        name: 'HP Laptop',
        imageURL: "",
        price: 12.99,
        description: 'This is HP Laptop',
    },
];
app.get('/products', (req, res) => {
    res.json(products);
});
app.post('/products', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
});
app.listen(8000, () => {
    console.log('Server is Running on port 8000');
});