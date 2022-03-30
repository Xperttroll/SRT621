exports.sendReqHome = (req, res) => {
    res.render("home");
};
exports.sendReqImages = (req, res) => {
    let num = req.params.imageNumber;
    res.render("image", {image: num});
};