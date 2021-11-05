const dbConnect = require("../util/connectDB");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
class userController {
    //get /users/
    //check if user logged in
    checkUser(req, res, next) {
        const { idUser } = req;
        if (!idUser) {
            return res
                .status(400)
                .json({ success: false, message: "user id missing" });
        }
        try {
            const query = "select * from account where idUser=?";
            dbConnect.query(query, [idUser], (err, result) => {
                if (err) throw err;
                if (result.length === 0) {
                    return res
                        .status(400)
                        .json({ success: false, message: "user not found" });
                }
                return res.json({ success: true, user: result[0] });
            });
        } catch (error) {}
    }
    //post /users/api/login
    login(req, res, next) {
        const userInfo = { ...req.body };
        if (Object.keys(userInfo).length === 0)
            return res
                .status(400)
                .json({ success: false, messages: "data invalid" });
        try {
            dbConnect.query(
                "select * from account where userName=?",
                [userInfo.userName],
                async (err, result) => {
                    if (err) throw err;
                    if (result.length === 0)
                        return res.status(400).json({
                            success: false,
                            message: "user or password is invalid"
                        });
                    const isTrue = await bcrypt.compare(
                        userInfo.password,
                        result[0].password
                    );
                    if (!isTrue)
                        return res.status(400).json({
                            success: false,
                            message: "username or password is not true"
                        });
                    const accessToken = jwt.sign(
                        { userId: result[0].idUser },
                        process.env.ACCESS_TOKEN_SECRET,
                        { expiresIn: "8h" }
                    );
                    res.json({
                        success: true,
                        message: "successful",
                        accessToken: accessToken
                    });
                }
            );
        } catch (error) {}
    }
    //post /users/api/register
    register(req, res, next) {
        const userInfo = { ...req.body };
        if (Object.keys(userInfo).length === 0)
            return res
                .status(400)
                .json({ success: false, message: "data is invalid" });
        try {
            dbConnect.query(
                "select * from account where userName= ?",
                [userInfo.userName],
                async (err, result) => {
                    if (err) throw err;

                    if (result.length > 0)
                        return res.status(400).json({
                            success: false,
                            message: "account already exist"
                        });
                    const hash = await bcrypt.hash(userInfo.password, 10);
                    userInfo.password = hash;
                    const newId = uuidv4();
                    const query =
                        "insert into account (idUser, userName, email, password, userLevel, maGV, maNV) values(?)";
                    const value = [
                        newId,
                        userInfo.userName,
                        userInfo.email,
                        userInfo.password,
                        userInfo.userLevel,
                        userInfo.maGV,
                        userInfo.maNV
                    ];
                    dbConnect.query(query, [value], (err, result) => {
                        if (err) throw err;
                        const accessToken = jwt.sign(
                            { userId: newId },
                            process.env.ACCESS_TOKEN_SECRET,
                            { expiresIn: "8h" }
                        );
                        res.json({
                            success: true,
                            message: "create a new account successfully",
                            accessToken: accessToken
                        });
                    });
                }
            );
        } catch (error) {}
    }
}

module.exports = new userController();
