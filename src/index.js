import express from 'express';
import productsRoutes from "./routes/products.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";

const app = express();

app.use(express.json());

app.use('/api', productsRoutes);
app.use('/api', categoriesRoutes);

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})