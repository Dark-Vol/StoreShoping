const { Item } = require('../models/models');

class ItemsControllers {
    static async getAll(req, resp) {
        const items = await Item.findAll();
        return resp.status(200).json(items);
    }

    static async getOne(req, resp) {
        const item = await Item.findByPk(req.params.id);
        if (item) {
            return resp.status(200).json(item);
        } else {
            return resp.status(404).json({ message: "Item not found" });
        }
    }

    static async create(req, resp) {
        const item = await Item.create({
            instrument_id: req.body.instrument_id,
            quantity: req.body.quantity,
            price: req.body.price
        });
        return resp.status(201).json(item);
    }

    static async updateForKey(req, resp) {
        const { instrument_id, quantity, price } = req.body;
        const item = await Item.findByPk(req.params.id);
        if (item) {
            item.instrument_id = instrument_id;
            item.quantity = quantity;
            item.price = price;
            await item.save();
            return resp.status(200).json(item);
        } else {
            return resp.status(404).json({ message: "Item not found" });
        }
    }

    static async updateForQuery(req, resp) {
        const { instrument_id, quantity, price } = req.body;
        const item = await Item.findOne({
            where: { instrument_id: req.query.instrument_id }
        });
        if (item) {
            item.instrument_id = instrument_id;
            item.quantity = quantity;
            item.price = price;
            await item.save();
            return resp.status(200).json(item);
        } else {
            return resp.status(404).json({ message: "Item not found" });
        }
    }

    static async delete(req, resp) {
        const item = await Item.findByPk(req.params.id);
        if (item) {
            await item.destroy();
            return resp.status(200).json({ message: "Item deleted" });
        } else {
            return resp.status(404).json({ message: "Item not found" });
        }
    }
}

module.exports = ItemsControllers;
