const { Transaction, DetailTransaction } = require('../../db/models');
const { Op } = require('sequelize');

module.exports = {
    getTransactionList: async ( req, res, next ) => {
        try {
            const { keyword = '' } = req.query;

            let condition = {
                user : req.user.id,
            };

            if (keyword !== '') {
                condition = { ...condition, invoice: { [Op.like]: `%${keyword}%`}}
            }

            const transaction = await Transaction.findAll({
                where: condition,
                attributes: ['id','invoice','date'],
                include: {
                    model : DetailTransaction,
                    as: 'detailTransaction',
                },
            });

            res.status(200).json({
                message: 'Success get all transaction',
                data: transaction,
            });

        } catch (err) {
            next(err);
        }
    },

    detailTransactionList: async ( req, res, next ) => {
        try {
            const { id } = req.params;

            const detailTransaction = await Transaction.findOne({
                where: { id: id },
                attributes: ['id','invoice','date'],
                include: {
                    model : DetailTransaction,
                    as: 'detailTransaction',
                },
            });

            res.status(200).json({
                message: 'Success get detail transaction',
                data: detailTransaction,
            });

        } catch (err) {
            next(err);
        }
    }
}