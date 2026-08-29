import { Schema, model } from "mongoose";

const leadSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", index: true },
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
    phone: { type: String, trim: true, maxlength: 30 },
    business_name: { type: String, trim: true, maxlength: 120 },
    service: { type: String, trim: true, maxlength: 120 },
    budget: { type: String, trim: true, maxlength: 120 },
    message: { type: String, required: true, trim: true, maxlength: 3000 },
    status: { type: String, enum: ["new", "contacted", "qualified", "closed"], default: "new" },
  },
  { timestamps: true, versionKey: false }
);

export const Lead = model("Lead", leadSchema);
