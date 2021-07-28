const userCtrl = {};
const User = require('../models/Users')

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
};

userCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newuser = new User({username});
    await newuser.save()
    res.json({message: 'User Created'})
};

userCtrl.deleteUsers = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({message: 'User Deleted'})
};

module.exports = userCtrl;