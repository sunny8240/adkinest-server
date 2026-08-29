import { env } from "../config/env.js";
import { Notification } from "../models/Notification.js";

export async function createNotification(alert) {
  await Notification.create(alert);
}

export async function sendExternalAlerts(input) {
  await sendEmail(input);
}

async function sendEmail(input) {
  if (!env.RESEND_API_KEY || !env.NOTIFICATION_FROM_EMAIL || !input.email) return;
  await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: env.NOTIFICATION_FROM_EMAIL, to: [input.email], subject: input.subject, text: input.body }) });
}

