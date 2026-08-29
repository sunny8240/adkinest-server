import { Schema, model } from "mongoose";

const conversationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  status: { type: String, enum: ["open", "closed"], default: "open" },
  lastMessageAt: { type: Date, default: Date.now },
}, { timestamps: true, versionKey: false });
conversationSchema.index({ lastMessageAt: -1 });
export const Conversation = model("Conversation", conversationSchema);
