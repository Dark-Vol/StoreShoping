const { Cart } = require('../models/models');

class CartsControllers {
    static async getAll(req, resp) {
        const carts = await Cart.findAll();
        return resp.status(200).json(carts);
    }

    static async getOne(req, resp) {
        const cart = await Cart.findByPk(req.params.id);
        if (cart) {
            return resp.status(200).json(cart);
        } else {
            return resp.status(404).json({ message: "Cart not found" });
        }
    }

    static async create(req, resp) {
        const cart = await Cart.create({
            user_id: req.body.user_id
        });
        return resp.status(201).json(cart);
    }

    static async updateForKey(req, resp) {
        const { user_id } = req.body;
        const cart = await Cart.findByPk(req.params.id);
        if (cart) {
            cart.user_id = user_id;
            await cart.save();
            return resp.status(200).json(cart);
        } else {
            return resp.status(404).json({ message: "Cart not found" });
        }
    }

    static async updateForQuery(req, resp) {
        const { user_id } = req.body;
        const cart = await Cart.findOne({
            where: { user_id: req.query.user_id }
        });
        if (cart) {
            cart.user_id = user_id;
            await cart.save();
            return resp.status(200).json(cart);
        } else {
            return resp.status(404).json({ message: "Cart not found" });
        }
    }

    static async delete(req, resp) {
        const cart = await Cart.findByPk(req.params.id);
        if (cart) {
            await cart.destroy();
            return resp.status(200).json({ message: "Cart deleted" });
        } else {
            return resp.status(404).json({ message: "Cart not found" });
        }
    }
}

module.exports = CartsControllers;
