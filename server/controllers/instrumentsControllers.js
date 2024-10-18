const { Instrument } = require('../models/models');

class InstrumentsControllers {
    static async getAll(req, resp) {
        try {
            const instruments = await Instrument.findAll();
            return resp.status(200).json(instruments);
        } catch (error) {
            return resp.status(500).json({ message: "Error retrieving instruments", error: error.message });
        }
    }

    static async getOne(req, resp) {
        try {
            const instrument = await Instrument.findByPk(req.params.id);
            if (instrument) {
                return resp.status(200).json(instrument);
            } else {
                return resp.status(404).json({ message: "Instrument not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error retrieving instrument", error: error.message });
        }
    }

    static async create(req, resp) {
        try {
            const { instrument_name, manufacture_id, category_id, description } = req.body;
            const instrument = await Instrument.create({
                instrument_name,
                manufacture_id,
                category_id,
                description
            });
            return resp.status(201).json(instrument);
        } catch (error) {
            return resp.status(500).json({ message: "Error creating instrument", error: error.message });
        }
    }

    static async updateForKey(req, resp) {
        try {
            const { instrument_name, manufacture_id, category_id } = req.body;
            const instrument = await Instrument.findByPk(req.params.id);
            if (instrument) {
                instrument.instrument_name = instrument_name;
                instrument.manufacture_id = manufacture_id;
                instrument.category_id = category_id;
                await instrument.save();
                return resp.status(200).json(instrument);
            } else {
                return resp.status(404).json({ message: "Instrument not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error updating instrument", error: error.message });
        }
    }

    static async updateForQuery(req, resp) {
        try {
            const { instrument_name, manufacture_id, category_id } = req.body;
            const instrument = await Instrument.findOne({
                where: { instrument_name: req.query.name }
            });
            if (instrument) {
                instrument.instrument_name = instrument_name;
                instrument.manufacture_id = manufacture_id;
                instrument.category_id = category_id;
                await instrument.save();
                return resp.status(200).json(instrument);
            } else {
                return resp.status(404).json({ message: "Instrument not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error updating instrument", error: error.message });
        }
    }

    static async delete(req, resp) {
        try {
            const instrument = await Instrument.findByPk(req.params.id);
            if (instrument) {
                await instrument.destroy();
                return resp.status(200).json({ message: "Instrument deleted" });
            } else {
                return resp.status(404).json({ message: "Instrument not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error deleting instrument", error: error.message });
        }
    }
}

module.exports = InstrumentsControllers;