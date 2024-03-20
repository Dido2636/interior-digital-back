import { Schema, mongoose } from "mongoose";
import bcrypt from "bcryptjs";

const decoratorSchema = new Schema({
  company: String,
  firstname: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "Decorator" },
  isadmin: { type: Boolean, default:false },
  comment: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

decoratorSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(6);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

decoratorSchema.methods.validPassword = async (
  candidatePassword,
  oldPassword
) => {
  const result = await bcrypt.compare(candidatePassword, oldPassword);
  return result;
};

const Decorator = mongoose.model("Decorator", decoratorSchema);

export default Decorator;
