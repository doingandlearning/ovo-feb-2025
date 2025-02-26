// @ts-types="npm:@types/express"
import express, { Request, Response } from "express";
import donutRoutes from "./routes/donuts.routes.ts";
import { logger } from "./middlewares/logger.ts";

const app = express();
app.use(express.json());
app.use(logger);

app.get("/", logger, (_req: Request, res: Response) => {
  res.json({ message: "Hello" });
});

app.use("/api/v1/donuts", donutRoutes);

app.listen(4321);
