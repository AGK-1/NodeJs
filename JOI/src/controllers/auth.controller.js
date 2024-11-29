const authService = require("../services/auth.service");
const register = async (req, res) => {

    const { body } = req;
    try {
        let result = await authService.register(body);

        if (!result) {
            return res.status(400).json({ error: "Error happened" })
        };
        console.log("scsddc");
        res.json({ result });

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const login = async (req, res) => {
    try {
        res.json(await authService.login(req.body));
    } catch (err) {
        res.status(400).json({ error: err.message })
    }

}

const authController = {
    login,
    register,

};



module.exports = authController;

