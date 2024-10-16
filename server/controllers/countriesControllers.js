const { Country } = require('../models/models');

class CountriesControllers {
    static async getAll(req, resp) {
        const countries = await Country.findAll();
        return resp.status(200).json(countries);
    }

    static async getOne(req, resp) {
        const country = await Country.findByPk(req.params.id);
        if (country) {
            return resp.status(200).json(country);
        } else {
            return resp.status(404).json({ message: "Country not found" });
        }
    }

    static async create(req, resp) {
        const country = await Country.create({
            country_name: req.body.country_name
        });
        return resp.status(201).json(country);
    }

    static async updateForKey(req, resp) {
        const { country_name } = req.body;
        const country = await Country.findByPk(req.params.id);
        if (country) {
            country.country_name = country_name;
            await country.save();
            return resp.status(200).json(country);
        } else {
            return resp.status(404).json({ message: "Country not found" });
        }
    }

    static async updateForQuery(req, resp) {
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
    }

    static async delete(req, resp) {
        const country = await Country.findByPk(req.params.id);
        if (country) {
            await country.destroy();
            return resp.status(200).json({ message: "Country deleted" });
        } else {
            return resp.status(404).json({ message: "Country not found" });
        }
    }
}

module.exports = CountriesControllers;