import mongoose, { model, models } from "mongoose";
// types for user model
export interface IUser {
  name: string;
  username: string;
  email: string;
  password: string;
  bio?: string;
  image: string;
  location?: string;
  portfolio?: string;
  reputation?: number;
}

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    bio: { type: String },
    image: { type: String, required: true },
    location: { type: String },
    portfolio: { type: String },
    reputation: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const User = models?.user || model<IUser>("User", UserSchema);
export default User;
