const {Item} = require('../models/models');

class ItemsControllers {
    static async getAll(req, res) {
        try {
            const items = await Item.findAll();
            return res.status(200).json(items);
        } catch (error) {
            return res.status(500).json({ message: "Error fetching items", error });
        }
    }

    static async getOne(req, res) {
        try {
            const item = await Item.findByPk(req.params.id);
            if (item) {
                return res.status(200).json(item);
            } else {
                return res.status(404).json({ message: "Item not found" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error fetching item", error });
        }
    }

    static async create(req, res) {
        try {
            const { instrument_id, serial_number, description, year_of_production, price, country_id, characteristics } = req.body;
            const item = await Item.create({
                instrument_id,
                serial_number,
                description,
                year_of_production,
                price,
                country_id,
                characteristics
            });
            return res.status(201).json(item);
        } catch (error) {
            return res.status(500).json({ message: "Error creating item", error });
        }
    }

    static async update(req, res) {
        try {
            const { instrument_id, serial_number, description, year_of_production, price, country_id, characteristics } = req.body;
            const item = await Item.findByPk(req.params.id);
            if (item) {
                item.instrument_id = instrument_id;
                item.serial_number = serial_number;
                item.description = description;
                item.year_of_production = year_of_production;
                item.price = price;
                item.country_id = country_id;
                item.characteristics = characteristics;
                await item.save();
                return res.status(200).json(item);
            } else {
                return res.status(404).json({ message: "Item not found" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error updating item", error });
        }
    }

    static async delete(req, res) {
        try {
            const item = await Item.findByPk(req.params.id);
            if (item) {
                await item.destroy();
                return res.status(200).json({ message: "Item deleted" });
            } else {
                return res.status(404).json({ message: "Item not found" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error deleting item", error });
        }
    }
}

module.exports = ItemsControllers;