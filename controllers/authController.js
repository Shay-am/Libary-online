const router = require("express").Router();
const User1 = require('../models/User');
const jwt = require("jsonwebtoken");
const { reqisterValidation } = require('../utils/validation')

//bibliotek szyfrowania password
const bcrypt = require("bcryptjs");


router.get('/api/auth/register', async (req, res) => {
    try {
        const response = await User1.find();
        res.json({
            data: response
        })
    } catch (error) {
        res.status(400).json({ error })
    }
})


router.post('/api/auth/register', async (req, res) => {
    const { email, password } = req.body
    const emailExist = await User1.findOne({ email });
    if (emailExist) {
        return res.status(400).json({ err: "Email already exist" })
    }
    //zaszyfrowany password
    const salt = await bcrypt.genSaltSync(10);
    const hashedpassword = await bcrypt.hashSync(password, salt);

    ///Validation createUser
    const { error } = reqisterValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message)

    const newUser = new User1({
        name: req.body.name,
        email: req.body.email,
        password: hashedpassword
    });
    try {
        const savedNewUser = await newUser.save();
        res.json({
            data: savedNewUser,
            msg: 'User add to database'
        })
    } catch (error) {
        res.status(400).json({ error });
    }
});

////Logowanie
router.post('/api/auth/login', async (req, res) => {
    try {
        //sprawdzamy czy email istnieje
        const user = await User1.findOne({ email: req.body.email });
        if (!user)
            return res.status(400).json({ err: "User not exist" });

        //sprawdzamy czy haslo jest poprawne
        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if (!validPassword) {
            return res.status(400).json({ err: 'invalid Password!!' });
        }
        const token = jwt.sign(
            {
                _id: user._id,
                name: user.name
            },
            process.env.JWT_SECRET
        );
        res.json({
            msg: "User logged in",
            token: token
        });
        res.status(200).json()
    } catch (error) {
        res.status(400).send( { error: 'UPS You can not logged in!!' });
        console.log({ error: 'UPS You can not logged in!!' })
    }
});




module.exports = router;
