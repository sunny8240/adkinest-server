import { Schema, model } from "mongoose";

const serviceRequestSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
  service: { type: String, required: true, trim: true, maxlength: 120 },
  details: { type: String, required: true, trim: true, maxlength: 2000 },
  status: { type: String, enum: ["requested", "in_progress", "completed", "cancelled"], default: "requested" },
}, { timestamps: true, versionKey: false });

serviceRequestSchema.index({ userId: 1, createdAt: -1 });
export const ServiceRequest = model("ServiceRequest", serviceRequestSchema);
