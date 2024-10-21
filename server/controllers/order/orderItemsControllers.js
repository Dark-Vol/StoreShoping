const {OrderItem} = require('../../models/models');

class OrderItemsControllers {
    static async getAll(req, res) {
        try {
            const orderItems = await OrderItem.findAll();
            return res.status(200).json(orderItems);
        } catch (error) {
            return res.status(500).json({ message: "Error fetching order items", error });
        }
    }

    static async getOne(req, res) {
        try {
            const orderItem = await OrderItem.findByPk(req.params.id);
            if (orderItem) {
                return res.status(200).json(orderItem);
            } else {
                return res.status(404).json({ message: "Order item not found" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error fetching order item", error });
        }
    }

    static async create(req, res) {
        try {
            const { customer_order_id, item_id, price, discount } = req.body;
            const orderItem = await OrderItem.create({
                customer_order_id,
                item_id,
                price,
                discount
            });
            return res.status(201).json(orderItem);
        } catch (error) {
            return res.status(500).json({ message: "Error creating order item", error });
        }
    }

    static async update(req, res) {
        try {
            const { customer_order_id, item_id, price, discount } = req.body;
            const orderItem = await OrderItem.findByPk(req.params.id);
            if (orderItem) {
                orderItem.customer_order_id = customer_order_id;
                orderItem.item_id = item_id;
                orderItem.price = price;
                orderItem.discount = discount;
                await orderItem.save();
                return res.status(200).json(orderItem);
            } else {
                return res.status(404).json({ message: "Order item not found" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error updating order item", error });
        }
    }

    static async delete(req, res) {
        try {
            const orderItem = await OrderItem.findByPk(req.params.id);
            if (orderItem) {
                await orderItem.destroy();
                return res.status(200).json({ message: "Order item deleted" });
            } else {
                return res.status(404).json({ message: "Order item not found" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error deleting order item", error });
        }
    }
}

module.exports = OrderItemsControllers;