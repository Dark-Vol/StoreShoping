const { CartItem } = require('../models/models');

class CartItemsControllers {
    static async getAll(req, resp) {
        try {
            const cartItems = await CartItem.findAll();
            return resp.status(200).json(cartItems);
        } catch (error) {
            return resp.status(500).json({ message: "Error retrieving cart items", error: error.message });
        }
    }

    static async getOne(req, resp) {
        try {
            const cartItem = await CartItem.findByPk(req.params.id);
            if (cartItem) {
                return resp.status(200).json(cartItem);
            } else {
                return resp.status(404).json({ message: "CartItem not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error retrieving cart item", error: error.message });
        }
    }

    static async create(req, resp) {
        try {
            const { cart_id, instrument_id, price, discount, active, content } = req.body;

            if (!cart_id || !instrument_id) {
                return resp.status(400).json({ message: "cart_id and instrument_id are required" });
            }

            const cartItem = await CartItem.create({
                cart_id,
                instrument_id,
                price,
                discount,
                active,
                content
            });
            return resp.status(201).json(cartItem);
        } catch (error) {
            return resp.status(500).json({ message: "Error creating cart item", error: error.message });
        }
    }

    static async updateForKey(req, resp) {
        try {
            const { cart_id, instrument_id, price, discount, active, content } = req.body;
            const cartItem = await CartItem.findByPk(req.params.id);

            if (cartItem) {
                cartItem.cart_id = cart_id ?? cartItem.cart_id;
                cartItem.instrument_id = instrument_id ?? cartItem.instrument_id;
                cartItem.price = price ?? cartItem.price;
                cartItem.discount = discount ?? cartItem.discount;
                cartItem.active = active ?? cartItem.active;
                cartItem.content = content ?? cartItem.content;
                await cartItem.save();
                return resp.status(200).json(cartItem);
            } else {
                return resp.status(404).json({ message: "CartItem not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error updating cart item", error: error.message });
        }
    }

    static async updateForQuery(req, resp) {
        try {
            const { cart_id, instrument_id, price, discount, active, content } = req.body;
            const cartItem = await CartItem.findOne({
                where: { cart_id: req.query.cart_id }
            });

            if (cartItem) {
                cartItem.cart_id = cart_id ?? cartItem.cart_id;
                cartItem.instrument_id = instrument_id ?? cartItem.instrument_id;
                cartItem.price = price ?? cartItem.price;
                cartItem.discount = discount ?? cartItem.discount;
                cartItem.active = active ?? cartItem.active;
                cartItem.content = content ?? cartItem.content;
                await cartItem.save();
                return resp.status(200).json(cartItem);
            } else {
                return resp.status(404).json({ message: "CartItem not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error updating cart item", error: error.message });
        }
    }

    static async delete(req, resp) {
        try {
            const cartItem = await CartItem.findByPk(req.params.id);
            if (cartItem) {
                await cartItem.destroy();
                return resp.status(200).json({ message: "CartItem deleted" });
            } else {
                return resp.status(404).json({ message: "CartItem not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error deleting cart item", error: error.message });
        }
    }
}

module.exports = CartItemsControllers;