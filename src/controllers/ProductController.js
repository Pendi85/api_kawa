import { async } from 'regenerator-runtime';
import { Op } from 'sequelize';
import model from '../models';

const { Product } = model;

export default {

  async findAll(req, res) {
    Product.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some errors occurred while retrieving products."
        });
      });
  },

  async createProduct(req, res) {
    Product.create({
      name: req.body.name,
      stock: req.body.stock,
      price: req.body.price,
      description: req.body.description,
      color: req.body.color,
      createAt: req.body.createAt,
      modelRA: req.body.modelRA,
      image: req.body.image
    })
      .then(data => {
        res.status(201).send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || `Some errors occurred while creating product '${req.body.name}'.`
        });
      });
  },

  async updateProduct(req, res) {
    Product.update(req.body, {
      where: { id: req.query.id }
    })
      .then(data => {
        res.send(`Produit '${req.query.id}' mis à jour`);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || `Some errors occurred while updating product '${req.query.id}'.`
        });
      });
  },

  async deleteProduct(req, res) {

    Product.destroy({
      where: { id: req.query.id }
    })
      .then(() => {
        res.send(`Produit '${req.query.id}' supprimé`);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while deleting product '${req.query.id}'."
        });
      });
  },

  async findById(req, res) {
    Product.findOne({
      where: { id: req.params.id }
    })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: "Product not found"
          });

        } else
          res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving one product."
        });
      });
  }
}