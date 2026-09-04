import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { enquiryRouter } from "./routes/enquiry.route";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  }),
);

app.use(express.json());

app.use(enquiryRouter);

app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Atelier API server listening on http://localhost:${port}`);
  });
}

export { app };
