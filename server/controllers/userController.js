const dbConnect = require("../util/connectDB");
const argon2 = require('argon2');
class userController {
    //post /users/api/login
    login(req, res, next) {}
    //post /users/api/register
    register(req, res, next) {
        const userInfo = { ...req.body };
        dbConnect.query(
            "select * from account where userName= ?",
            [userInfo.userName],
            (err, result, field) => {
                if (err) throw err;
                if (result)
                    return res
                        .status(400)
                        .json({
                            success: false,
                            message: "user already exist"
                        });
            }
        );
        const hash= await argon2.hash(userInfo.password);
        userInfo.password= hash;
        dbConnect.query("insert into account values(?,?,?,?,?,?,?)",[])

    }
}

module.exports = new userController();
