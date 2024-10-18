const { Cart } = require('../models/models');

class CartsControllers {
    static async getAll(req, resp) {
        try {
            const carts = await Cart.findAll();
            return resp.status(200).json(carts);
        } catch (error) {
            return resp.status(500).json({ message: "Error retrieving carts", error: error.message });
        }
    }

    static async getOne(req, resp) {
        try {
            const cart = await Cart.findByPk(req.params.id);
            if (cart) {
                return resp.status(200).json(cart);
            } else {
                return resp.status(404).json({ message: "Cart not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error retrieving cart", error: error.message });
        }
    }

    static async create(req, resp) {
        try {
            const { user_id, status, session_id, firstName, middleName, lastName, mobile, email, city, province, country, content } = req.body;
            
            if (!user_id || !status) {
                return resp.status(400).json({ message: "user_id and status are required" });
            }

            const cart = await Cart.create({
                user_id,
                status,
                session_id,
                firstName,
                middleName,
                lastName,
                mobile,
                email,
                city,
                province,
                country,
                content
            });
            return resp.status(201).json(cart);
        } catch (error) {
            return resp.status(500).json({ message: "Error creating cart", error: error.message });
        }
    }

    static async updateForKey(req, resp) {
        try {
            const { user_id, status, session_id, firstName, middleName, lastName, mobile, email, city, province, country, content } = req.body;
            const cart = await Cart.findByPk(req.params.id);

            if (cart) {
                cart.user_id = user_id ?? cart.user_id;
                cart.status = status ?? cart.status;
                cart.session_id = session_id ?? cart.session_id;
                cart.firstName = firstName ?? cart.firstName;
                cart.middleName = middleName ?? cart.middleName;
                cart.lastName = lastName ?? cart.lastName;
                cart.mobile = mobile ?? cart.mobile;
                cart.email = email ?? cart.email;
                cart.city = city ?? cart.city;
                cart.province = province ?? cart.province;
                cart.country = country ?? cart.country;
                cart.content = content ?? cart.content;
                await cart.save();
                return resp.status(200).json(cart);
            } else {
                return resp.status(404).json({ message: "Cart not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error updating cart", error: error.message });
        }
    }

    static async updateForQuery(req, resp) {
        try {
            const { user_id, status, session_id, firstName, middleName, lastName, mobile, email, city, province, country, content } = req.body;
            const cart = await Cart.findOne({
                where: { user_id: req.query.user_id }
            });

            if (cart) {
                cart.user_id = user_id ?? cart.user_id;
                cart.status = status ?? cart.status;
                cart.session_id = session_id ?? cart.session_id;
                cart.firstName = firstName ?? cart.firstName;
                cart.middleName = middleName ?? cart.middleName;
                cart.lastName = lastName ?? cart.lastName;
                cart.mobile = mobile ?? cart.mobile;
                cart.email = email ?? cart.email;
                cart.city = city ?? cart.city;
                cart.province = province ?? cart.province;
                cart.country = country ?? cart.country;
                cart.content = content ?? cart.content;
                await cart.save();
                return resp.status(200).json(cart);
            } else {
                return resp.status(404).json({ message: "Cart not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error updating cart", error: error.message });
        }
    }

    static async delete(req, resp) {
        try {
            const cart = await Cart.findByPk(req.params.id);
            if (cart) {
                await cart.destroy();
                return resp.status(200).json({ message: "Cart deleted" });
            } else {
                return resp.status(404).json({ message: "Cart not found" });
            }
        } catch (error) {
            return resp.status(500).json({ message: "Error deleting cart", error: error.message });
        }
    }
}

module.exports = CartsControllers;
