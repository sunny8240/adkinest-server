import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 120 },
    description: { type: String, required: true, trim: true, maxlength: 2000 },
    category: { type: String, required: true, trim: true, maxlength: 60 },
    image_url: { type: String, required: true, trim: true, maxlength: 2048 },
    tech_stack: { type: [String], default: [], validate: [(items) => items.length <= 20, "Too many technologies"] },
    live_url: { type: String, trim: true, maxlength: 2048 },
    github_url: { type: String, trim: true, maxlength: 2048 },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false }
);

export const Project = model("Project", projectSchema);
