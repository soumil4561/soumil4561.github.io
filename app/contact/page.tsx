"use client";
import Script from "next/script";
import { useState, useEffect, useRef } from "react";

import { PrimaryButton } from "@/components/button/Button";
import { siteConfig } from "@/config/site";
import ArrowIconButton from "@/components/button/ArrowButton";

type TurnstileState = "idle" | "verified" | "error" | "expired";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const tokenRef = useRef<string | null>(null);
  const [turnstileState, setTurnstileState] = useState<TurnstileState>("idle");

  useEffect(() => {
    // MUST be attached to window
    (window as any).onTurnstileSuccess = (token: string) => {
      tokenRef.current = token;
      setTurnstileState("verified");
    };

    (window as any).onTurnstileError = () => {
      tokenRef.current = null;
      setTurnstileState("error");
    };

    (window as any).onTurnstileExpired = () => {
      tokenRef.current = null;
      setTurnstileState("expired");
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const message = formData.get("message")?.toString();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!name) {
      throw new Error("Please enter a name");
    }

    if (!email || !emailRegex.test(email)) {
      throw new Error("Please enter a valid email address");
    }

    if (!message || message.length < 10) {
      throw new Error("Message must be at least 10 characters");
    }

    const payload = {
      name: name,
      email: email,
      message: message,
      time: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZoneName: "short",
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      token: tokenRef.current,
    };

    try {
      const response = await fetch("http://localhost:8787/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      form.reset();
    } catch (err) {
      alert(`Failed to send message due to error: ${err}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section w-11/12 mx-auto" id="contact">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <div className="flex flex-row justify-center items-stretch w-full gap-4">
        {/* <div className="hidden lg:flex flex-1">
          <div className="relative w-full">
            <Image
              alt="some photo"
              src="/phone.jpg"
              fill
              className="object-contain"
            />
          </div>
        </div> */}

        <div className="flex flex-col flex-1">
          <div className="border-1 border-border p-8 bg-background-tertiary">
            <h4 className="uppercase tracking-widest text-xs font-light">
              contact
            </h4>
            <h2 className="font-heading text-4xl my-2">
              Let&apos;s get in touch
            </h2>

            <form
              className="flex flex-col gap-4 mt-8 mb-4"
              onSubmit={handleSubmit}
            >
              <input
                className="bg-background-tertiary p-4 rounded-xs outline-0"
                placeholder="name"
              />
              <input
                className="bg-background-tertiary p-4 rounded-xs outline-0"
                placeholder="email"
              />
              <textarea
                className="bg-background-tertiary p-4 rounded-xs outline-0"
                placeholder="message"
                rows={4}
              />
              <div
                className="cf-turnstile"
                data-callback="onTurnstileSuccess"
                data-error-callback="onTurnstileError"
                data-expired-callback="onTurnstileExpired"
                data-sitekey={`${process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY}`}
                data-size="flexible"
                data-theme="auto"
              />
              <PrimaryButton
                className="font-semibold"
                disabled={turnstileState !== "verified"}
                id="contact-submit-btn"
                text={loading ? "Sending..." : "Send Message"}
                type="submit"
              />
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
            <ArrowIconButton link={siteConfig.links.mail} type="mail" />
            <ArrowIconButton link={siteConfig.links.linkedin} type="linkedin" />
            <ArrowIconButton link={siteConfig.links.github} type="github" />

            <div className="md:col-span-3 flex justify-center gap-4">
              <ArrowIconButton
                className="w-full"
                link={siteConfig.links.pgp}
                type="pgp"
              />
              <ArrowIconButton
                className="w-full"
                link={siteConfig.links.resume}
                type="resume"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
