const { Transaction } = require('../models/models');

class TransactionsControllers {
    static async getAll(req, res) {
        try {
            const transactions = await Transaction.findAll();
            return res.status(200).json(transactions);
        } catch (error) {
            return res.status(500).json({ message: "Error fetching transactions", error });
        }
    }

    static async getOne(req, res) {
        try {
            const transaction = await Transaction.findByPk(req.params.id);
            if (transaction) {
                return res.status(200).json(transaction);
            } else {
                return res.status(404).json({ message: "Transaction not found" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error fetching transaction", error });
        }
    }

    static async create(req, res) {
        try {
            const { user_id, order_item_id, code, payee, payer, status, content } = req.body;
            const transaction = await Transaction.create({ 
                user_id, 
                order_item_id, 
                code, 
                payee, 
                payer, 
                status, 
                content 
            });
            return res.status(201).json(transaction);
        } catch (error) {
            return res.status(500).json({ message: "Error creating transaction", error });
        }
    }

    static async update(req, res) {
        try {
            const { user_id, order_item_id, code, payee, payer, status, content } = req.body;
            const transaction = await Transaction.findByPk(req.params.id);
            if (transaction) {
                transaction.user_id = user_id;
                transaction.order_item_id = order_item_id;
                transaction.code = code;
                transaction.payee = payee;
                transaction.payer = payer;
                transaction.status = status;
                transaction.content = content;
                await transaction.save();
                return res.status(200).json(transaction);
            } else {
                return res.status(404).json({ message: "Transaction not found" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error updating transaction", error });
        }
    }

    static async delete(req, res) {
        try {
            const transaction = await Transaction.findByPk(req.params.id);
            if (transaction) {
                await transaction.destroy();
                return res.status(200).json({ message: "Transaction deleted" });
            } else {
                return res.status(404).json({ message: "Transaction not found" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error deleting transaction", error });
        }
    }
}

module.exports = TransactionsControllers;