const { User } = require('../models/models');

class UsersControllers {
    static async getAll(req, resp) {
        try {
            const users = await User.findAll();
            return resp.status(200).json(users);
        } catch (err) {
            return resp.status(500).json({ message: "Error fetching users", error: err });
        }
    }

    static async getOne(req, resp) {
        try {
            const user = await User.findByPk(req.params.id);
            if (user) {
                return resp.status(200).json(user);
            } else {
                return resp.status(404).json({ message: "User not found" });
            }
        } catch (err) {
            return resp.status(500).json({ message: "Error fetching user", error: err });
        }
    }

    static async create(req, resp) {
        try {
            const { customer_name, email, password, confirmation_code, country_id } = req.body;
            const newUser = await User.create({ 
                customer_name, 
                email, 
                password, 
                confirmation_code, 
                country_id 
            });
            return resp.status(201).json(newUser);
        } catch (err) {
            return resp.status(500).json({ message: "Error creating user", error: err });
        }
    }

    static async updateForKey(req, resp) {
        try {
            const { customer_name, email, password, confirmation_code, country_id } = req.body;
            const user = await User.findByPk(req.params.id);
            if (user) {
                user.customer_name = customer_name;
                user.email = email;
                user.password = password;
                user.confirmation_code = confirmation_code;
                user.country_id = country_id;
                await user.save();
                return resp.status(200).json(user);
            } else {
                return resp.status(404).json({ message: "User not found" });
            }
        } catch (err) {
            return resp.status(500).json({ message: "Error updating user", error: err });
        }
    }

    static async updateForQuery(req, resp) {
        try {
            const { customer_name, email, password, confirmation_code, country_id } = req.body;
            const user = await User.findOne({ where: { email: req.query.email } });
            if (user) {
                user.customer_name = customer_name;
                user.email = email;
                user.password = password;
                user.confirmation_code = confirmation_code;
                user.country_id = country_id;
                await user.save();
                return resp.status(200).json(user);
            } else {
                return resp.status(404).json({ message: "User not found" });
            }
        } catch (err) {
            return resp.status(500).json({ message: "Error updating user", error: err });
        }
    }

    static async delete(req, resp) {
        try {
            const user = await User.findByPk(req.params.id);
            if (user) {
                await user.destroy();
                return resp.status(200).json({ message: "User deleted" });
            } else {
                return resp.status(404).json({ message: "User not found" });
            }
        } catch (err) {
            return resp.status(500).json({ message: "Error deleting user", error: err });
        }
    }
}

module.exports = UsersControllers;