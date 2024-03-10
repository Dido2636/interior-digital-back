import { Schema, mongoose } from "mongoose";
import bcrypt from "bcryptjs"

const decoratorSchema = new Schema({
    name : String,
    firstname : String,
    email: { type : String,},
    password: String,
})

decoratorSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  });



const Decorator = mongoose.model("Decorator", decoratorSchema);

export default Decorator;