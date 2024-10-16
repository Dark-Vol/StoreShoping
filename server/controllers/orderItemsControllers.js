const { OrderItem } = require('../models/models');

class OrderItemsControllers {
    static async getAll(req, resp) {
        const orderItems = await OrderItem.findAll();
        return resp.status(200).json(orderItems);
    }

    static async getOne(req, resp) {
        const orderItem = await OrderItem.findByPk(req.params.id);
        if (orderItem) {
            return resp.status(200).json(orderItem);
        } else {
            return resp.status(404).json({ message: "Order item not found" });
        }
    }

    static async create(req, resp) {
        const orderItem = await OrderItem.create({
            order_id: req.body.order_id,
            item_id: req.body.item_id,
            quantity: req.body.quantity,
            price: req.body.price
        });
        return resp.status(201).json(orderItem);
    }

    static async updateForKey(req, resp) {
        const { order_id, item_id, quantity, price } = req.body;
        const orderItem = await OrderItem.findByPk(req.params.id);
        if (orderItem) {
            orderItem.order_id = order_id;
            orderItem.item_id = item_id;
            orderItem.quantity = quantity;
            orderItem.price = price;
            await orderItem.save();
            return resp.status(200).json(orderItem);
        } else {
            return resp.status(404).json({ message: "Order item not found" });
        }
    }

    static async updateForQuery(req, resp) {
        const { order_id, item_id, quantity, price } = req.body;
        const orderItem = await OrderItem.findOne({
            where: { order_id: req.query.order_id }
        });
        if (orderItem) {
            orderItem.order_id = order_id;
            orderItem.item_id = item_id;
            orderItem.quantity = quantity;
            orderItem.price = price;
            await orderItem.save();
            return resp.status(200).json(orderItem);
        } else {
            return resp.status(404).json({ message: "Order item not found" });
        }
    }

    static async delete(req, resp) {
        const orderItem = await OrderItem.findByPk(req.params.id);
        if (orderItem) {
            await orderItem.destroy();
            return resp.status(200).json({ message: "Order item deleted" });
        } else {
            return resp.status(404).json({ message: "Order item not found" });
        }
    }
}

module.exports = OrderItemsControllers;
