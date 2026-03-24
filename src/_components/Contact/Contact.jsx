"use client";

import React, { useEffect, useState } from "react";
import style from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    requirement: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (status === "sending") {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "form_submit", {
        event_category: "lead",
        event_label: "contact_form",
      });
    }

    setStatus("sending");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const contentType = res.headers.get("content-type") || "";
        let errorMessage = "Network response was not ok";

        if (contentType.includes("application/json")) {
          const body = await res.json();
          errorMessage = body?.error || errorMessage;
        } else {
          const text = await res.text();
          if (text) {
            errorMessage = `Request failed with status ${res.status}`;
          }
        }

        throw new Error(errorMessage);
      }

      setStatus("success");
      setStatusMessage(
        "Thank you for contacting us! We will get back to you soon.",
      );
      setFormData({ name: "", whatsapp: "", requirement: "" });
    } catch (error) {
      console.error("Contact form sending error:", error);
      setStatus("error");
      setStatusMessage(
        "Unable to send your enquiry right now. Please try again later or call us.",
      );
    }
  };

  return (
    <>
      <div className={style.contactContainer}>
        <img
          src="/benifitone.webp"
          alt="Contact Us"
          className={style.contactImage}
        />
        <div className={style.contactContent}>
          <h2 className={style.contacttitle}>Contact Us</h2>
          <p className={style.contacttitlepara}>
            or call us on
            <a
              href="tel:+916299188118"
              className={style.contactCallLink}
              onClick={() => {
                if (typeof window !== "undefined" && typeof window.gtag === "function") {
                  window.gtag("event", "call_click", {
                    event_category: "contact",
                    event_label: "contact_call_button",
                  });
                }
              }}
            >
              <span className={style.phoneIcon} role="img" aria-label="phone">
                📞
              </span>
              <span className={style.phoneNumber}>+91 6299188118</span>
            </a>
          </p>
          <form onSubmit={handleSubmit} className={style.contactForm}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === "sending"}
              className={style.inputField}
            />
            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp Number"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              disabled={status === "sending"}
              className={style.inputField}
            />
            <textarea
              name="requirement"
              placeholder="Tell Us About Your Requirement"
              value={formData.requirement}
              onChange={handleChange}
              required
              disabled={status === "sending"}
              className={style.textareaField}
              rows="5"
            ></textarea>
            <button
              type="submit"
              className={style.submitButton}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {status === "sending" && (
        <div className={style.fullscreenOverlay}>
          <div className={style.overlayContent}>
            <div className={style.loaderCircle} aria-hidden="true" />
            <p className={style.overlayTitle}>Sending your enquiry</p>
            <p className={style.overlaySubtitle}>
              Please wait a moment. Do not close or refresh the page.
            </p>
          </div>
        </div>
      )}

      {(status === "success" || status === "error") && statusMessage && (
        <div
          className={style.resultBanner}
          data-variant={status === "success" ? "success" : "error"}
          onAnimationEnd={() => {
            if (status !== "sending") {
              setTimeout(() => {
                setStatus("idle");
                setStatusMessage("");
              }, 2500);
            }
          }}
        >
          <p>{statusMessage}</p>
        </div>
      )}
    </>
  );
};

export default Contact;
