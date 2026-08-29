import { createApp } from "./app.js";
import { connectDatabase, disconnectDatabase } from "./config/database.js";
import { env } from "./config/env.js";

async function start() {
  await connectDatabase();
  const app = createApp();
  const server = app.listen(env.PORT, () => {
    console.info(`Adkinest API listening on port ${env.PORT}`);
  });

  const shutdown = async (signal) => {
    console.info(`${signal} received. Closing server...`);
    server.close(async () => {
      await disconnectDatabase();
      process.exit(0);
    });
  };

  process.once("SIGINT", () => void shutdown("SIGINT"));
  process.once("SIGTERM", () => void shutdown("SIGTERM"));
}

start().catch((error) => {
  console.error("Unable to start Adkinest API", error);
  process.exit(1);
});
