const { Transaction } = require('../models/models');

class TransactionsControllers {
    static async getAll(req, resp) {
        const transactions = await Transaction.findAll();
        return resp.status(200).json(transactions);
    }

    static async getOne(req, resp) {
        const transaction = await Transaction.findByPk(req.params.id);
        if (transaction) {
            return resp.status(200).json(transaction);
        } else {
            return resp.status(404).json({ message: "Transaction not found" });
        }
    }

    static async create(req, resp) {
        const transaction = await Transaction.create({
            order_id: req.body.order_id,
            payment_method: req.body.payment_method,
            total_amount: req.body.total_amount
        });
        return resp.status(201).json(transaction);
    }

    static async updateForKey(req, resp) {
        const { order_id, payment_method, total_amount } = req.body;
        const transaction = await Transaction.findByPk(req.params.id);
        if (transaction) {
            transaction.order_id = order_id;
            transaction.payment_method = payment_method;
            transaction.total_amount = total_amount;
            await transaction.save();
            return resp.status(200).json(transaction);
        } else {
            return resp.status(404).json({ message: "Transaction not found" });
        }
    }

    static async updateForQuery(req, resp) {
        const { order_id, payment_method, total_amount } = req.body;
        const transaction = await Transaction.findOne({
            where: { order_id: req.query.order_id }
        });
        if (transaction) {
            transaction.order_id = order_id;
            transaction.payment_method = payment_method;
            transaction.total_amount = total_amount;
            await transaction.save();
            return resp.status(200).json(transaction);
        } else {
            return resp.status(404).json({ message: "Transaction not found" });
        }
    }

    static async delete(req, resp) {
        const transaction = await Transaction.findByPk(req.params.id);
        if (transaction) {
            await transaction.destroy();
            return resp.status(200).json({ message: "Transaction deleted" });
        } else {
            return resp.status(404).json({ message: "Transaction not found" });
        }
    }
}

module.exports = TransactionsControllers;
