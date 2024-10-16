const { Instrument } = require('../models/models');

class InstrumentsControllers {
    static async getAll(req, resp) {
        const instruments = await Instrument.findAll();
        return resp.status(200).json(instruments);
    }

    static async getOne(req, resp) {
        const instrument = await Instrument.findByPk(req.params.id);
        if (instrument) {
            return resp.status(200).json(instrument);
        } else {
            return resp.status(404).json({ message: "Instrument not found" });
        }
    }

    static async create(req, resp) {
        const instrument = await Instrument.create({
            name: req.body.name,
            manufacture_id: req.body.manufacture_id,
            category_id: req.body.category_id
        });
        return resp.status(201).json(instrument);
    }

    static async updateForKey(req, resp) {
        const { name, manufacture_id, category_id } = req.body;
        const instrument = await Instrument.findByPk(req.params.id);
        if (instrument) {
            instrument.name = name;
            instrument.manufacture_id = manufacture_id;
            instrument.category_id = category_id;
            await instrument.save();
            return resp.status(200).json(instrument);
        } else {
            return resp.status(404).json({ message: "Instrument not found" });
        }
    }

    static async updateForQuery(req, resp) {
        const { name, manufacture_id, category_id } = req.body;
        const instrument = await Instrument.findOne({
            where: { name: req.query.name }
        });
        if (instrument) {
            instrument.name = name;
            instrument.manufacture_id = manufacture_id;
            instrument.category_id = category_id;
            await instrument.save();
            return resp.status(200).json(instrument);
        } else {
            return resp.status(404).json({ message: "Instrument not found" });
        }
    }

    static async delete(req, resp) {
        const instrument = await Instrument.findByPk(req.params.id);
        if (instrument) {
            await instrument.destroy();
            return resp.status(200).json({ message: "Instrument deleted" });
        } else {
            return resp.status(404).json({ message: "Instrument not found" });
        }
    }
}

module.exports = InstrumentsControllers;
