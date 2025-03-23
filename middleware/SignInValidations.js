const userSchema = require("../common/SignInValidationSchema");
const validate = (req, res, next) =>{
    const verify = userSchema.safeParse(req.body);
    
    if(!verify.success) {
        return res.status(400).send("Invalid eamil or password foramt");
    }
    
    next()
}

module.exports = validate;

