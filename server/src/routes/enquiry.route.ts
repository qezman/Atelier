import { Router } from "express";
import { submitEnquiry } from "../services/enquiry.service";

export const enquiryRouter = Router();

const isValidEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

enquiryRouter.post("/enquiry", async (req, res) => {
  const { name, email, projectType, message } = req.body as {
    name?: string;
    email?: string;
    projectType?: string;
    message?: string;
  };

  if (!name || !email || !message || !isValidEmail(email)) {
    res.status(422).json({ error: "Please complete all required fields." });
    return;
  }

  try {
    await submitEnquiry({
      name,
      email,
      projectType: projectType ?? null,
      message,
    });
    res.status(201).json({ message: "Enquiry received." });
  } catch (err) {
    console.error("Failed to insert enquiry:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});
