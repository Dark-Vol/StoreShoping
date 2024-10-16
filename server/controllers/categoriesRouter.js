const { Category } = require('../models/models');

class CategoriesControllers {
    static async getAll(req, resp) {
        const categories = await Category.findAll();
        return resp.status(200).json(categories);
    }

    static async getOne(req, resp) {
        const category = await Category.findByPk(req.params.id);
        if (category) {
            return resp.status(200).json(category);
        } else {
            return resp.status(404).json({ message: "Category not found" });
        }
    }

    static async create(req, resp) {
        const category = await Category.create({
            category_name: req.body.category_name
        });
        return resp.status(201).json(category);
    }

    static async updateForKey(req, resp) {
        const { category_name } = req.body;
        const category = await Category.findByPk(req.params.id);
        if (category) {
            category.category_name = category_name;
            await category.save();
            return resp.status(200).json(category);
        } else {
            return resp.status(404).json({ message: "Category not found" });
        }
    }

    static async updateForQuery(req, resp) {
        const { category_name } = req.body;
        const category = await Category.findOne({
            where: { category_name: req.query.category_name }
        });
        if (category) {
            category.category_name = category_name;
            await category.save();
            return resp.status(200).json(category);
        } else {
            return resp.status(404).json({ message: "Category not found" });
        }
    }

    static async delete(req, resp) {
        const category = await Category.findByPk(req.params.id);
        if (category) {
            await category.destroy();
            return resp.status(200).json({ message: "Category deleted" });
        } else {
            return resp.status(404).json({ message: "Category not found" });
        }
    }
}

module.exports = CategoriesControllers;
