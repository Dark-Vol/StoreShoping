const {OrderStatus} = require('../models/models');

class OrderStatusesControllers {
    static async getAll(req, res) {
        try {
            const statuses = await OrderStatus.findAll();
            return res.status(200).json(statuses);
        } catch (error) {
            return res.status(500).json({ message: "Error fetching statuses", error });
        }
    }

    static async getOne(req, res) {
        try {
            const status = await OrderStatus.findByPk(req.params.id);
            if (status) {
                return res.status(200).json(status);
            } else {
                return res.status(404).json({ message: "Order status not found" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error fetching order status", error });
        }
    }

    static async create(req, res) {
        try {
            const { status_name } = req.body;
            const status = await OrderStatus.create({ status_name });
            return res.status(201).json(status);
        } catch (error) {
            return res.status(500).json({ message: "Error creating order status", error });
        }
    }

    static async update(req, res) {
        try {
            const { status_name } = req.body;
            const status = await OrderStatus.findByPk(req.params.id);
            if (status) {
                status.status_name = status_name;
                await status.save();
                return res.status(200).json(status);
            } else {
                return res.status(404).json({ message: "Order status not found" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error updating order status", error });
        }
    }

    static async delete(req, res) {
        try {
            const status = await OrderStatus.findByPk(req.params.id);
            if (status) {
                await status.destroy();
                return res.status(200).json({ message: "Order status deleted" });
            } else {
                return res.status(404).json({ message: "Order status not found" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error deleting order status", error });
        }
    }
}

module.exports = OrderStatusesControllers;