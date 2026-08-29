import { randomUUID } from "node:crypto";

export const requestId = (req, res, next) => {
  const id = req.header("X-Request-Id")?.slice(0, 100) || randomUUID();
  req.requestId = id;
  res.setHeader("X-Request-Id", id);
  next();
};
