const { Manufacture } = require('../models/models');

class ManufacturesControllers {
    static async getAll(req, resp) {
        const manufactures = await Manufacture.findAll();
        return resp.status(200).json(manufactures);
    }

    static async getOne(req, resp) {
        const manufacture = await Manufacture.findByPk(req.params.id);
        if (manufacture) {
            return resp.status(200).json(manufacture);
        } else {
            return resp.status(404).json({ message: "Manufacture not found" });
        }
    }

    static async create(req, resp) {
        const manufacture = await Manufacture.create({
            manufacture_name: req.body.manufacture_name,
            contact_info: req.body.contact_info,
            website: req.body.website,
            country_id: req.body.country_id
        });
        return resp.status(201).json(manufacture);
    }

    static async updateForKey(req, resp) {
        const { manufacture_name, contact_info, website, country_id } = req.body;
        const manufacture = await Manufacture.findByPk(req.params.id);
        if (manufacture) {
            manufacture.manufacture_name = manufacture_name;
            manufacture.contact_info = contact_info;
            manufacture.website = website;
            manufacture.country_id = country_id;
            await manufacture.save();
            return resp.status(200).json(manufacture);
        } else {
            return resp.status(404).json({ message: "Manufacture not found" });
        }
    }

    static async updateForQuery(req, resp) {
        const { manufacture_name, contact_info, website, country_id } = req.body;
        const manufacture = await Manufacture.findOne({
            where: { manufacture_name: req.query.manufacture_name }
        });
        if (manufacture) {
            manufacture.manufacture_name = manufacture_name;
            manufacture.contact_info = contact_info;
            manufacture.website = website;
            manufacture.country_id = country_id;
            await manufacture.save();
            return resp.status(200).json(manufacture);
        } else {
            return resp.status(404).json({ message: "Manufacture not found" });
        }
    }

    static async delete(req, resp) {
        const manufacture = await Manufacture.findByPk(req.params.id);
        if (manufacture) {
            await manufacture.destroy();
            return resp.status(200).json({ message: "Manufacture deleted" });
        } else {
            return resp.status(404).json({ message: "Manufacture not found" });
        }
    }
}

module.exports = ManufacturesControllers;
