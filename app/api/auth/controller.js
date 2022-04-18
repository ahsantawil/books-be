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
    },

    signup: async (req, res, next) => {
        try {
            const { name, email, password, confirmPassword } = req.body;

            if ( password !== confirmPassword) {
                res.status(403).json({ message: "Password and confirm password don't match" });
            }

            const checkEmail = await User.findOne({ where: { email: email } });
            if (checkEmail) {
              return res.status(403).json({ message: "Email Registered" });
            }

            const user = await User.create({ name, email, password: bcrypt.hashSync(password, 10) , role : 'admin' });
            
            delete user.dataValues.password;

                res.status(201).json({ 
                    message: 'Success signup',
                    data: user,
                });
            
        } catch (err) {
            next(err);
        }
    }
}