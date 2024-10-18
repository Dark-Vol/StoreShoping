const { Country } = require('../models/models');

class CountriesControllers {
    static async getAll(req, resp) {
        try {
            const countries = await Country.findAll();
            return resp.status(200).json(countries);
        } catch (error) {
            return resp.status(500).json({ message: "Error retrieving countries", error: error.message });
        }
    }

    static async getOne(req, resp) {
        try {
            const country = await Country.findByPk(req.params.id);
            if (country) {
                return resp.status(200).json(country);
            } else {
                return resp.status(404).json({ message: "Country not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error retrieving country", error: error.message });
        }
    }

    static async create(req, resp) {
        try {
            const country = await Country.create({
                country_name: req.body.country_name
            });
            return resp.status(201).json(country);
        } catch (error) {
            return resp.status(500).json({ message: "Error creating country", error: error.message });
        }
    }

    static async updateForKey(req, resp) {
        try {
            const { country_name } = req.body;
            const country = await Country.findByPk(req.params.id);
            if (country) {
                country.country_name = country_name;
                await country.save();
                return resp.status(200).json(country);
            } else {
                return resp.status(404).json({ message: "Country not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error updating country", error: error.message });
        }
    }

    static async updateForQuery(req, resp) {
        try {
            const { country_name } = req.body;
            const country = await Country.findOne({
                where: { country_name: req.query.country_name }
            });
            if (country) {
                country.country_name = country_name;
                await country.save();
                return resp.status(200).json(country);
            } else {
                return resp.status(404).json({ message: "Country not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error updating country", error: error.message });
        }
    }

    static async delete(req, resp) {
        try {
            const country = await Country.findByPk(req.params.id);
            if (country) {
                await country.destroy();
                return resp.status(200).json({ message: "Country deleted" });
            } else {
                return resp.status(404).json({ message: "Country not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error deleting country", error: error.message });
        }
    }
}

module.exports = CountriesControllers;