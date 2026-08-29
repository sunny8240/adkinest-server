import { Schema, model } from "mongoose";

const siteContentSchema = new Schema(
  {
    key: { type: String, unique: true, default: "main" },
    announcement: { type: String, trim: true, maxlength: 240, default: "" },
    hero_title: { type: String, trim: true, maxlength: 160, default: "" },
    hero_description: { type: String, trim: true, maxlength: 1000, default: "" },
    services: { type: [String], default: [], validate: [(items) => items.length <= 30, "Too many services"] },
  },
  { timestamps: true, versionKey: false }
);

export const SiteContent = model("SiteContent", siteContentSchema);
