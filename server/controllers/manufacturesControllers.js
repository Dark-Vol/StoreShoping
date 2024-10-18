const {Manufacture} = require('../models/models');

class ManufacturesControllers {
    static async getAll(req, res) {
        try {
            const manufactures = await Manufacture.findAll();
            return res.status(200).json(manufactures);
        } catch (error) {
            return res.status(500).json({ message: "Error fetching manufactures", error });
        }
    }

    static async getOne(req, res) {
        try {
            const manufacture = await Manufacture.findByPk(req.params.id);
            if (manufacture) {
                return res.status(200).json(manufacture);
            } else {
                return res.status(404).json({ message: "Manufacture not found" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error fetching manufacture", error });
        }
    }

    static async create(req, res) {
        try {
            const { manufacture_name, contact_info, website, country_id } = req.body;
            const manufacture = await Manufacture.create({
                manufacture_name,
                contact_info,
                website,
                country_id
            });
            return res.status(201).json(manufacture);
        } catch (error) {
            return res.status(500).json({ message: "Error creating manufacture", error });
        }
    }

    static async update(req, res) {
        try {
            const { manufacture_name, contact_info, website, country_id } = req.body;
            const manufacture = await Manufacture.findByPk(req.params.id);
            if (manufacture) {
                manufacture.manufacture_name = manufacture_name;
                manufacture.contact_info = contact_info;
                manufacture.website = website;
                manufacture.country_id = country_id;
                await manufacture.save();
                return res.status(200).json(manufacture);
            } else {
                return res.status(404).json({ message: "Manufacture not found" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error updating manufacture", error });
        }
    }

    static async delete(req, res) {
        try {
            const manufacture = await Manufacture.findByPk(req.params.id);
            if (manufacture) {
                await manufacture.destroy();
                return res.status(200).json({ message: "Manufacture deleted" });
            } else {
                return res.status(404).json({ message: "Manufacture not found" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error deleting manufacture", error });
        }
    }
}

module.exports = ManufacturesControllers;