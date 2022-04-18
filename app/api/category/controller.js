const { Category } = require('../../db/models');

module.exports = {
    getAllCategory : async( req, res, next ) => {
        try {
            const category = await Category.findAll({
                where: { user: req.user.id },
                attributes: ['id', 'name'],
            });

            res.status(200).json({ 
                message: 'Success get All category',
                data: category,
            })
        } catch (err) {
            next(err);
        }
    },

    createCategory : async (req, res, next) => {
        try {
            const { name } = req.body;

            const category = await Category.create({
                name: name,
                user: req.user.id,
            });

            res.status(201).json({
                message: 'Success create category',
                data: category,
            });
        } catch (err) {
            next();
        }
    },

    updateCategory : async(req, res, next) => {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const checkCategory = await Category.findOne({
                where: {
                    id: id,
                    user: req.user.id,
                },
            })

            const category = await checkCategory.update({ name: name });
            res.status(200).json({
                message: 'Success update category',
                data: category,
            });

        } catch (err) {
            next(err)
        }
    },

    deleteCategory : (req, res, next) => {
        Category.findOne({
            where: { id: req.params.id, user: req.user.id },

        })
        .then((category) => {
            if (category) {
                category.destroy();

                res.status(200).json({
                    message: 'Success Delete Category',
                    data: category,
                });
            }
        })
        .catch((err) => next(err));
    }

}