const { CartItem } = require('../models/models');

class CartItemsControllers {
    static async getAll(req, resp) {
        const cartItems = await CartItem.findAll();
        return resp.status(200).json(cartItems);
    }

    static async getOne(req, resp) {
        const cartItem = await CartItem.findByPk(req.params.id);
        if (cartItem) {
            return resp.status(200).json(cartItem);
        } else {
            return resp.status(404).json({ message: "CartItem not found" });
        }
    }

    static async create(req, resp) {
        const cartItem = await CartItem.create({
            cart_id: req.body.cart_id,
            item_id: req.body.item_id,
            quantity: req.body.quantity
        });
        return resp.status(201).json(cartItem);
    }

    static async updateForKey(req, resp) {
        const { cart_id, item_id, quantity } = req.body;
        const cartItem = await CartItem.findByPk(req.params.id);
        if (cartItem) {
            cartItem.cart_id = cart_id;
            cartItem.item_id = item_id;
            cartItem.quantity = quantity;
            await cartItem.save();
            return resp.status(200).json(cartItem);
        } else {
            return resp.status(404).json({ message: "CartItem not found" });
        }
    }

    static async updateForQuery(req, resp) {
        const { cart_id, item_id, quantity } = req.body;
        const cartItem = await CartItem.findOne({
            where: { cart_id: req.query.cart_id }
        });
        if (cartItem) {
            cartItem.cart_id = cart_id;
            cartItem.item_id = item_id;
            cartItem.quantity = quantity;
            await cartItem.save();
            return resp.status(200).json(cartItem);
        } else {
            return resp.status(404).json({ message: "CartItem not found" });
        }
    }

    static async delete(req, resp) {
        const cartItem = await CartItem.findByPk(req.params.id);
        if (cartItem) {
            await cartItem.destroy();
            return resp.status(200).json({ message: "CartItem deleted" });
        } else {
            return resp.status(404).json({ message: "CartItem not found" });
        }
    }
}

module.exports = CartItemsControllers;
