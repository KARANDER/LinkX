const jwt = require("jsonwebtoken");

const isAuthorized = (req, res, next) => {
    // console.log(req.user);
    // if (!req.cookies.accessToken) {
    //     return res.status(401).json({ msg: "Unauthorized" });
    // }
    // jwt.verify(req.cookies.accessToken, process.env.JWT_TOKEN_SECRET, (err, decoded) => {
    //     if (err) {
    //         return res.status(401).json({ msg: "Token not verified, Access denied" });
    //     }
    //     next();
    // });
    next();
};

module.exports = isAuthorized;
