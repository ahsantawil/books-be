const { Book } = require('../../db/models');

module.exports = {
    getAllBooks : async( req, res, next ) => {
        try {
            const book = await Book.findAll({
                where: { user: req.user.id },
            });

            res.status(200).json({ 
                message: 'Success get All books',
                data: book,
            })
        } catch (err) {
            next(err);
        }
    },
    
}