const { User } = require('../../db/models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    signin: async ( req, res, next ) => {
        try {
            const { email, password } = req.body;
            const checkUSer = await User.findOne({ where: { email: email } });

            if (checkUSer) {
                const checkPassword = bcrypt.compareSync(password, checkUSer.password);

                if (checkPassword) {
                    const token = jwt.sign({
                        user: {
                            id: checkUSer.id,
                            name: checkUSer.name,
                            email: checkUSer.email,
                        },
                    },
                    'secret'
                    );
                    res.status(200).json({ message: 'Success Signin', data: token });
                } else {
                    res.status(403).json({ message: 'Invalid Password'});
                }
            } else {
                res.status(403).json({ message: 'Invalid Email'});
            }
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}