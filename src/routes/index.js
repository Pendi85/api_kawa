import ProductController from '../controllers/ProductController'
import AuthMiddleware from "../middleware/AuthMiddleware";

export default (app) => {
    app.get('/products', AuthMiddleware.authenticateJWT, ProductController.findAll);
    app.post('/products', ProductController.createProduct);
    app.put('/products', ProductController.updateProduct);
    app.delete('/products', ProductController.deleteProduct);
    app.get('/products/:id', AuthMiddleware.authenticateJWT, ProductController.findById);
};