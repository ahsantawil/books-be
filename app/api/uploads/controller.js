// const fs = require('fs');

const uploadsImage = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(403).json({
                message: 'No file Upload'
            });
        }

        res.status(201).json({
            message: 'Success Upload image',
            data: { src:`/uploads/${req.file.filename}` },
        });

    } catch (err) {
        next(err);
    }
};

module.exports = { uploadsImage };