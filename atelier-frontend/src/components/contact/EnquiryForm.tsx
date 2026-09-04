"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { submitEnquiry } from "@/lib/api/enquiry";

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Residential",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) {
      setErrorMessage("");
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const res = await submitEnquiry(formData);

    if (res.error) {
      setStatus("error");
      setErrorMessage(res.error);
    } else {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: "Residential",
        message: "",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 max-w-lg w-full"
    >
      {/* Live Region for Error / Success Announcements */}
      <div aria-live="polite" className="min-h-[1.5rem]">
        {status === "error" && (
          <div className="flex items-center gap-2 text-sm text-clay-text bg-clay-dim p-3 rounded-sm border border-clay/30">
            <AlertCircle className="w-4 h-4 shrink-0 text-clay" />
            <span>{errorMessage}</span>
          </div>
        )}
        {status === "success" && (
          <div className="flex items-center gap-2 text-sm text-ink bg-paper-raised p-3 rounded-sm border border-border-strong">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-clay" />
            <span>Thank you. Your consultation enquiry has been received.</span>
          </div>
        )}
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="enquiry-name"
          className="type-label text-ink-secondary block"
        >
          Full Name{" "}
          <span className="text-clay" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="enquiry-name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Charlotte Perriand"
          className="w-full bg-paper-raised border border-border px-4 py-3 text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay transition-colors rounded-none"
        />
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="enquiry-email"
          className="type-label text-ink-secondary block"
        >
          Email Address{" "}
          <span className="text-clay" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="enquiry-email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="charlotte@atelier.studio"
          className="w-full bg-paper-raised border border-border px-4 py-3 text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay transition-colors rounded-none"
        />
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="enquiry-type"
          className="type-label text-ink-secondary block"
        >
          Project Type
        </label>
        <select
          id="enquiry-type"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full bg-paper-raised border border-border px-4 py-3 text-sm text-ink focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay transition-colors rounded-none"
        >
          <option value="Residential">Residential Architecture</option>
          <option value="Commercial">Commercial & Cultural</option>
          <option value="Interior">Interior Architecture</option>
          <option value="Landscape">Landscape & Site Masterplan</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="enquiry-message"
          className="type-label text-ink-secondary block"
        >
          Project Details & Location{" "}
          <span className="text-clay" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe the site location, approximate timeline, and scope of work..."
          className="w-full bg-paper-raised border border-border px-4 py-3 text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay transition-colors rounded-none resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-charcoal text-ink-on-dark hover:bg-ink px-8 py-4 text-xs font-medium tracking-[0.14em] uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-clay disabled:opacity-50"
      >
        <span>
          {status === "submitting" ? "Submitting…" : "Submit Enquiry"}
        </span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
