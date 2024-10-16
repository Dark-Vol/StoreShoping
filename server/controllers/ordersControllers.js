const { Order } = require('../models/models');

class OrdersControllers {
    static async getAll(req, resp) {
        const orders = await Order.findAll();
        return resp.status(200).json(orders);
    }

    static async getOne(req, resp) {
        const order = await Order.findByPk(req.params.id);
        if (order) {
            return resp.status(200).json(order);
        } else {
            return resp.status(404).json({ message: "Order not found" });
        }
    }

    static async create(req, resp) {
        const order = await Order.create({
            user_id: req.body.user_id,
            status_id: req.body.status_id
        });
        return resp.status(201).json(order);
    }

    static async updateForKey(req, resp) {
        const { user_id, status_id } = req.body;
        const order = await Order.findByPk(req.params.id);
        if (order) {
            order.user_id = user_id;
            order.status_id = status_id;
            await order.save();
            return resp.status(200).json(order);
        } else {
            return resp.status(404).json({ message: "Order not found" });
        }
    }

    static async updateForQuery(req, resp) {
        const { user_id, status_id } = req.body;
        const order = await Order.findOne({
            where: { user_id: req.query.user_id }
        });
        if (order) {
            order.user_id = user_id;
            order.status_id = status_id;
            await order.save();
            return resp.status(200).json(order);
        } else {
            return resp.status(404).json({ message: "Order not found" });
        }
    }

    static async delete(req, resp) {
        const order = await Order.findByPk(req.params.id);
        if (order) {
            await order.destroy();
            return resp.status(200).json({ message: "Order deleted" });
        } else {
            return resp.status(404).json({ message: "Order not found" });
        }
    }
}

module.exports = OrdersControllers;
