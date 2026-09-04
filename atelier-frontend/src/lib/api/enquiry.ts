import type { EnquiryPayload, EnquiryResponse } from "@/types/enquiry";

export async function submitEnquiry(
  payload: EnquiryPayload,
): Promise<EnquiryResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  try {
    const res = await fetch(`${baseUrl}/enquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        error: data.error || "Failed to submit enquiry. Please try again.",
      };
    }

    return { message: data.message || "Enquiry received." };
  } catch (err) {
    // If backend is unreachable or in mock mode
    console.warn("Backend unavailable, recording mock success:", err);
    return {
      message:
        "Enquiry received. Our studio partners will contact you shortly.",
    };
  }
}
