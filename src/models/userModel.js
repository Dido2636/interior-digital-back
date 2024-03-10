import { Schema, mongoose } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  name: String,
  firstname: String,
  email: { type: String, required: true},
  password: { type: String, required: true},
  role: { type: String, default: "User" },
  comment: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

export default User;
