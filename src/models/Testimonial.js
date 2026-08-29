import { Schema, model } from "mongoose";

const testimonialSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    role: { type: String, required: true, trim: true, maxlength: 100 },
    company: { type: String, required: true, trim: true, maxlength: 120 },
    avatar_url: { type: String, trim: true, maxlength: 2048 },
    quote: { type: String, required: true, trim: true, maxlength: 2000 },
    rating: { type: Number, required: true, min: 1, max: 5 },
  },
  { timestamps: true, versionKey: false }
);

export const Testimonial = model("Testimonial", testimonialSchema);
