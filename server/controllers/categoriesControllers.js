const { Category } = require('../models/models');

class CategoriesControllers {
    static async findCategoryById(id) {
        return Category.findByPk(id);
    }

    static async getAll(req, resp) {
        try {
            const categories = await Category.findAll();
            return resp.status(200).json(categories);
        } catch (error) {
            return resp.status(500).json({ message: "Error retrieving categories", error: error.message });
        }
    }

    static async getOne(req, resp) {
        try {
            const category = await CategoriesControllers.findCategoryById(req.params.id);
            if (category) {
                return resp.status(200).json(category);
            } else {
                return resp.status(404).json({ message: "Category not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error retrieving category", error: error.message });
        }
    }

    static async create(req, resp) {
        try {
            const category = await Category.create({
                category_name: req.body.category_name
            });
            return resp.status(201).json(category);
        } catch (error) {
            return resp.status(500).json({ message: "Error creating category", error: error.message });
        }
    }

    static async updateForKey(req, resp) {
        try {
            const { category_name } = req.body;
            const category = await CategoriesControllers.findCategoryById(req.params.id);
            if (category) {
                category.category_name = category_name;
                await category.save();
                return resp.status(200).json(category);
            } else {
                return resp.status(404).json({ message: "Category not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error updating category", error: error.message });
        }
    }

    static async updateForQuery(req, resp) {
        try {
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
        } catch (error) {
            return resp.status(500).json({ message: "Error updating category", error: error.message });
        }
    }

    static async delete(req, resp) {
        try {
            const category = await CategoriesControllers.findCategoryById(req.params.id);
            if (category) {
                await category.destroy();
                return resp.status(200).json({ message: "Category deleted" });
            } else {
                return resp.status(404).json({ message: "Category not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error deleting category", error: error.message });
        }
    }
}

module.exports = CategoriesControllers;