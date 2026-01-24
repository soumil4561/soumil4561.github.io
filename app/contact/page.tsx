"use client";
import Script from "next/script";
import { useState, useEffect, useRef } from "react";

import { PrimaryButton } from "@/components/button/Button";
import { siteConfig } from "@/config/site";
import ArrowIconButton from "@/components/button/ArrowButton";
import Tooltip from "@/components/tooltip/Tooltip";

type TurnstileState = "idle" | "verified" | "error" | "expired";

export default function Contact() {
  const EMAIL_PROXY_HOST =
    process.env.NEXT_PUBLIC_EMAIL_PROXY_HOST ?? "http://localhost:8787";

  const [loading, setLoading] = useState(false);
  const tokenRef = useRef<string | null>(null);
  const [nameInputState, setNameInputState] = useState<Boolean>(false);
  const [emailInputState, setEmailInputState] = useState<Boolean>(false);
  const [messageInputState, setMessageInputState] = useState<Boolean>(false);
  const [turnstileState, setTurnstileState] = useState<TurnstileState>("idle");
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);
  const [showMessageTooltip, setShowMessageTooltip] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
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

  useEffect(() => {
    if (!submitSuccess) return;

    const timer = setTimeout(() => {
      setSubmitSuccess(null);
    }, 3000); // 3 seconds is the sweet spot

    return () => clearTimeout(timer);
  }, [submitSuccess]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const isNameNull = !name;
    const isEmailNull = !email;
    const isMessageNull = !message;
    const isEmailInvalid = isEmailNull ? false : !emailRegex.test(email ?? "");
    const isMessageInvalid = isMessageNull ? false : message.length < 10;

    setNameInputState(isNameNull);
    setEmailInputState(isEmailNull);
    setMessageInputState(isMessageNull);
    setShowEmailTooltip(isEmailInvalid);
    setShowMessageTooltip(isMessageInvalid);

    const isError =
      isNameNull ||
      isEmailNull ||
      isMessageNull ||
      isEmailInvalid ||
      isMessageInvalid;

    if (isError) {
      setLoading(false);

      return;
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
      const response = await fetch(`${EMAIL_PROXY_HOST}/send-contact-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!result.success) {
        setSubmitError(result.message);

        return;
      }
      setSubmitError(null);
      setSubmitSuccess(result.message ?? "Message sent successfully.");
      form.reset();
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const value = e.target.value;

    if (value.trim()) {
      switch (e.target.id) {
        case "name":
          setNameInputState(false);
          break;
        case "email":
          setEmailInputState(false);
          break;
        case "message":
          setMessageInputState(false);
          break;
        default:
          break;
      }
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
                className={`bg-background-tertiary p-4 rounded-xs outline-0 ${nameInputState && "border-default border-1"}`}
                id="name"
                name="name"
                placeholder="Name"
                onChange={handleInput}
              />
              <div className="relative">
                <input
                  className={`bg-background-tertiary p-4 rounded-xs outline-0 w-full ${
                    emailInputState && "border-default border-1"
                  }`}
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleInput}
                />

                <Tooltip
                  isVisible={showEmailTooltip}
                  onDismiss={() => setShowEmailTooltip(false)}
                >
                  <span>Please enter an email address.</span>
                </Tooltip>
              </div>
              <div className="relative">
                <textarea
                  className={`bg-background-tertiary p-4 rounded-xs outline-0 w-full ${messageInputState && "border-default border-1"}`}
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={4}
                  onChange={handleInput}
                />
                <Tooltip
                  isVisible={showMessageTooltip}
                  onDismiss={() => setShowMessageTooltip(false)}
                >
                  <span>Message size should be greater than 10</span>
                </Tooltip>
              </div>

              <div
                className="cf-turnstile"
                data-callback="onTurnstileSuccess"
                data-error-callback="onTurnstileError"
                data-expired-callback="onTurnstileExpired"
                data-sitekey={`${process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY}`}
                data-size="flexible"
                data-theme="auto"
              />
              {submitSuccess && (
                <p className="text-default text-sm">{submitSuccess}</p>
              )}
              {submitError && (
                <div className="text-red-300 text-sm">{submitError}</div>
              )}
              <PrimaryButton
                className="font-medium"
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
