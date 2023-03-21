import ProductController from '../controllers/ProductController'

export default (app) => {
    app.get('/products', ProductController.findAll);
    app.post('/products', ProductController.createProduct);
    app.put('/products', ProductController.updateProduct);
    app.delete('/products',  ProductController.deleteProduct);

    // Create a catch-all route for testing the installation.
    app.all('*', (req, res) => res.status(200).send({
        message: 'Hello World!',
    }));
};