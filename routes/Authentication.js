const { Router } = require("express");
const bcrypt = require("bcrypt");
const router = Router();
const createJWT = require("../common/JwtToken");
const userSignIn = require("../database/Schemas/UserSignIn");
const permission = require("../common/PermissionConstant");
const UserSignIn = require("../database/Schemas/UserSignIn");
const validate = require("../middleware/SignInValidations");

router.post("/signIn/password", validate, async (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;

  try {
    const user = await userSignIn.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).send(`eamil is already exist ${email}`);
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await userSignIn.create({
      name: name,
      email: email,
      password: hashPassword,
      permissions: [permission.read],
    });

    if (newUser) {
      const token = createJWT({
        id: newUser.id,
        permission: newUser.permissions,
      });
      return res.status(200).send(token);
    }
  } catch (error) {
    return res.status(500).send( `Unable to create user ${error}`);
  }
});

router.get("/login/password", async(req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    try{
        const user = await UserSignIn.findOne({email : email});
    if(!user) return res.status(404).send(`user not found ${email}`);
    const verifyPassword = await bcrypt.compare(password, user.password);
    if(!verifyPassword) return res.status(400).send(`Incorrect Password: ${password}`);
    const token  = createJWT({id : user.id , permission : user.permissions});
    res.status(200).send(token);
    }catch(error){
      res.status(500).send(`Internal server error: ${error}`)
    }
    
})

module.exports = router;
