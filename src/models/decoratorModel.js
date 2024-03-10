import { Schema, mongoose } from "mongoose";
import bcrypt from "bcryptjs";

const decoratorSchema = new Schema({
  name:{ type: String, required: true},
  firstname:{ type: String, required: true},
  email: { type: String, required: true},
  password: { type: String, required: true},
  role: { type: String, default: "User" },
  comment: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});


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
