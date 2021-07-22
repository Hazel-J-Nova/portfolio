//jshint esversion:9
const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.redirect("/login");
    }
    next();
};

module.exports = isLoggedIn;