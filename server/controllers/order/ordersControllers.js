const { Orders } = require('../../models/models');

class OrdersControllers {
    static async getAll(req, resp) {
        try {
            const orders = await Orders.findAll();
            return resp.status(200).json(orders);
        } catch (error) {
            return resp.status(500).json({ message: "Error retrieving orders", error: error.message });
        }
    }

    static async getOne(req, resp) {
        try {
            const order = await Orders.findByPk(req.params.id);
            if (order) {
                return resp.status(200).json(order);
            } else {
                return resp.status(404).json({ message: "Order not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error retrieving order", error: error.message });
        }
    }

    static async create(req, resp) {
        try {
            const { user_id, status, total_amount, discount, shipping_address, payment_method, content } = req.body;

            if (!user_id || !status || !total_amount) {
                return resp.status(400).json({ message: "user_id, status, and total_amount are required" });
            }

            const order = await Orders.create({
                user_id,
                status,
                total_amount,
                discount,
                shipping_address,
                payment_method,
                content
            });

            return resp.status(201).json(order);
        } catch (error) {
            return resp.status(500).json({ message: "Error creating order", error: error.message });
        }
    }

    static async updateForKey(req, resp) {
        try {
            const { user_id, status, total_amount, discount, shipping_address, payment_method, content } = req.body;
            const order = await Orders.findByPk(req.params.id);

            if (order) {
                order.user_id = user_id ?? order.user_id;
                order.status = status ?? order.status;
                order.total_amount = total_amount ?? order.total_amount;
                order.discount = discount ?? order.discount;
                order.shipping_address = shipping_address ?? order.shipping_address;
                order.payment_method = payment_method ?? order.payment_method;
                order.content = content ?? order.content;
                await order.save();
                return resp.status(200).json(order);
            } else {
                return resp.status(404).json({ message: "Order not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error updating order", error: error.message });
        }
    }

    static async updateForQuery(req, resp) {
        try {
            const { user_id, status, total_amount, discount, shipping_address, payment_method, content } = req.body;
            const order = await Orders.findOne({
                where: { user_id: req.query.user_id }
            });

            if (order) {
                order.user_id = user_id ?? order.user_id;
                order.status = status ?? order.status;
                order.total_amount = total_amount ?? order.total_amount;
                order.discount = discount ?? order.discount;
                order.shipping_address = shipping_address ?? order.shipping_address;
                order.payment_method = payment_method ?? order.payment_method;
                order.content = content ?? order.content;
                await order.save();
                return resp.status(200).json(order);
            } else {
                return resp.status(404).json({ message: "Order not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error updating order", error: error.message });
        }
    }

    static async delete(req, resp) {
        try {
            const order = await Orders.findByPk(req.params.id);
            if (order) {
                await order.destroy();
                return resp.status(200).json({ message: "Order deleted" });
            } else {
                return resp.status(404).json({ message: "Order not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error deleting order", error: error.message });
        }
    }
}

module.exports = OrdersControllers;
