const {z} = require("zod")

const userSchema = z.object({
    email : z.string().email({message : "Invalid email format"}),
    password : z.string().min(8 , {message : "Invalid password should be of min 8 length"})
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[\W_]/, { message: "Password must contain at least one special character" })
});

module.exports = userSchema;