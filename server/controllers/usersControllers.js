const { User } = require('../models/models');

class UsersControllers {
    static async getAll(req, resp) {
        console.log(req.query)
        if (req.query.age) {
            const users = await User.findAll({
                where: {
                    age: req.query.age
                }
            });
            return resp.status(200).json(users);
        } else {
            const users = await User.findAll();
            return resp.status(200).json(users);
        }
    }

    static async getOne(reg, resp){
        const user = await User.findByPk(reg.params.id);
        if(user){
            return resp.status(200).json(user);
        } else {
            return resp.status(404).json({ message: "user not found" });
        }
    }

    static async create(req, resp) {
        const user = await User.create(
            {
                name: req.body.name,
                age: req.body.age
            }
        );
        return resp.status(201).json(user);
    }

    static async updateForKey(req, resp) {
        const { name, age } = req.body;
        const user = await User.findByPk(req.params.id);
        if (user) {
            user.name = name;
            user.age = age;
            await user.save();
            return resp.status(200).json(user);
        } else {
            return resp.status(404).json({ message: "user not found" });
        }
    }


    static async updateForQuery(req,resp) {
        const { name, age } = req.body;
        const user = await User.findOne({
            where: {
                name: req.query.name
            }
        });
        if (user) {
            user.name = name;
            user.age = age;
            await user.save();
            return resp.status(200).json(user);
        } else {
            return resp.status(404).json({ message: "user not found" });
        }
    }

    static async delete(req, resp) {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            return resp.status(200).json({ message: "user deleted" });
        } else {
            return resp.status(404).json({ message: "user not found" });
        }
    }
}

module.exports = UsersControllers;