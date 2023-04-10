const User = require('../model/User');
const bcrypt = require('bcrypt');

const hanleNewUser = async (req, res)=>{
    const {user, pwd } = req.body;
    if(!user || !pwd) return res.status(400).json({'message':'No username or password'});
    const duplicate = await User.findOne({username: user}).exec();
    if(duplicate) return res.sendStatus(409);
    try{
        const hashedPwd = await bcrypt.hash(pwd,10);
        const newUser = {
            "username":user, 
            "roles": {"User":2001},
            "password":hashedPwd
        };
        userDB.serUsers([...userDB.users, newUser]);
        await fsPromises.writeFile(
            path.join(__dirname,'..','model','users.json'),
            JSON.stringify(userDB.users)
        );
        console.log(userDB.users);
        res.status(201).json({'success':`New user ${user} created`});
    } catch(err){
        res.status(500).json({'message':err.message});
    }
}

module.exports = {hanleNewUser};