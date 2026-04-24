"use client";

import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const Contact = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = React.useState<string>("");

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setServerMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");
      setStatus("success");
      setServerMessage(data.message || "Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      const message =
        err instanceof Error
          ? err.message
          : "Failed to send. Please try again.";
      setServerMessage(message);
    }
  }

  return (
    <section id="contact" className="py-2 sm:py-3 md:py-4 lg:py-5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-2 sm:mb-3 md:mb-4">
          Contact Me
        </h2>
        <p className="text-center text-xs sm:text-sm md:text-sm lg:text-base text-gray-600 dark:text-gray-300 mb-2 sm:mb-3 md:mb-4 max-w-2xl mx-auto leading-relaxed">
          Have a question, project idea, or just want to say hi? Fill out the
          form below and I&apos;ll get back to you as soon as possible.
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-2 sm:space-y-3 md:space-y-4 max-w-xl mx-auto p-2.5 sm:p-3 md:p-4 lg:p-5 border border-gray-300 dark:border-gray-600 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl bg-gray-50 dark:bg-gray-800/80 backdrop-blur-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs sm:text-sm md:text-base">
                Name<span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                aria-invalid={!!errors.name}
                className="h-8 sm:h-9 md:h-10 text-xs sm:text-sm md:text-base"
              />
              {errors.name && (
                <p className="text-xs sm:text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-xs sm:text-sm md:text-base"
              >
                Email<span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                aria-invalid={!!errors.email}
                className="h-8 sm:h-9 md:h-10 text-xs sm:text-sm md:text-base"
              />
              {errors.email && (
                <p className="text-xs sm:text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="subject"
              className="text-xs sm:text-sm md:text-base"
            >
              Subject<span className="text-red-500">*</span>
            </Label>
            <Input
              id="subject"
              placeholder="What is this about?"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              aria-invalid={!!errors.subject}
              className="h-8 sm:h-9 md:h-10 text-xs sm:text-sm md:text-base"
            />
            {errors.subject && (
              <p className="text-xs sm:text-sm text-red-500">
                {errors.subject}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-xs sm:text-sm md:text-base"
            >
              Message<span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Write your message..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              aria-invalid={!!errors.message}
              className="min-h-[72px] sm:min-h-[84px] md:min-h-[96px] text-xs sm:text-sm md:text-base resize-none"
            />
            {errors.message && (
              <p className="text-xs sm:text-sm text-red-500">
                {errors.message}
              </p>
            )}
          </div>
          <div className="pt-1 sm:pt-1.5 md:pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto relative inline-flex items-center justify-center rounded-md sm:rounded-lg bg-blue-600 px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base font-medium text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed hover:bg-blue-500"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </div>
          {status === "success" && (
            <p className="text-xs sm:text-sm md:text-base font-medium text-green-600">
              {serverMessage}
            </p>
          )}
          {status === "error" && (
            <p className="text-xs sm:text-sm md:text-base font-medium text-red-600">
              {serverMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
