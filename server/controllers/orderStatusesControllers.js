const { OrderStatus } = require('../models/models');

class OrderStatusesControllers {
    static async getAll(req, resp) {
        const statuses = await OrderStatus.findAll();
        return resp.status(200).json(statuses);
    }

    static async getOne(req, resp) {
        const status = await OrderStatus.findByPk(req.params.id);
        if (status) {
            return resp.status(200).json(status);
        } else {
            return resp.status(404).json({ message: "Order status not found" });
        }
    }

    static async create(req, resp) {
        const status = await OrderStatus.create({
            name: req.body.name
        });
        return resp.status(201).json(status);
    }

    static async updateForKey(req, resp) {
        const { name } = req.body;
        const status = await OrderStatus.findByPk(req.params.id);
        if (status) {
            status.name = name;
            await status.save();
            return resp.status(200).json(status);
        } else {
            return resp.status(404).json({ message: "Order status not found" });
        }
    }

    static async updateForQuery(req, resp) {
        const { name } = req.body;
        const status = await OrderStatus.findOne({
            where: { name: req.query.name }
        });
        if (status) {
            status.name = name;
            await status.save();
            return resp.status(200).json(status);
        } else {
            return resp.status(404).json({ message: "Order status not found" });
        }
    }

    static async delete(req, resp) {
        const status = await OrderStatus.findByPk(req.params.id);
        if (status) {
            await status.destroy();
            return resp.status(200).json({ message: "Order status deleted" });
        } else {
            return resp.status(404).json({ message: "Order status not found" });
        }
    }
}

module.exports = OrderStatusesControllers;
