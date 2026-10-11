import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Radio } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactLinks } from "./ContactLinks";

type SendState = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [state, setState] = useState<SendState>("idle");
  const [notice, setNotice] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const endpoint = import.meta.env["VITE_FORMSPREE_ENDPOINT"];
    if (!endpoint) {
      setState("error");
      setNotice("The message form isn't connected yet. Please check back soon.");
      return;
    }

    setState("sending");
    setNotice("");
    try {
      const data = new FormData(form);
      data.set("_replyto", String(data.get("email") ?? ""));
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setState("success");
      setNotice("Thanks for reaching out. I'll get back to you soon.");
    } catch {
      setState("error");
      setNotice("Something went wrong. Please try again.");
    }
  };

  return (
    <section aria-labelledby="contact-heading" className="py-4">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <p className="text-xs tracking-[0.28em] text-subtle-foreground uppercase">
            Contact / Open channel
          </p>
          <h1
            id="contact-heading"
            className="mt-3 max-w-lg font-display text-3xl font-semibold uppercase sm:text-5xl"
          >
            Let's Build Something
          </h1>
          <p className="mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
            Have an idea, opportunity or just want to say hello?
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-pill border border-primary/20 bg-glass px-3 py-2 text-xs tracking-[0.14em] text-muted-foreground">
            <Radio className="size-3.5 text-success" aria-hidden="true" /> MESSAGE READY
          </div>
        </div>

        <div className="min-w-0">
          <form onSubmit={submit} className="glass rounded-lg p-5 shadow-glass sm:p-7">
            <div className="grid gap-5">
              <label className="grid gap-2 text-xs tracking-[0.16em] text-subtle-foreground uppercase">
                Name
                <input
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  className="h-11 rounded-md border border-border bg-surface/70 px-3 text-sm normal-case text-foreground outline-none transition-colors placeholder:text-subtle-foreground focus:border-primary/50"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-xs tracking-[0.16em] text-subtle-foreground uppercase">
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  className="h-11 rounded-md border border-border bg-surface/70 px-3 text-sm normal-case text-foreground outline-none transition-colors placeholder:text-subtle-foreground focus:border-primary/50"
                  placeholder="you@example.com"
                />
              </label>
              <label className="grid gap-2 text-xs tracking-[0.16em] text-subtle-foreground uppercase">
                Message
                <textarea
                  name="message"
                  required
                  maxLength={5000}
                  rows={4}
                  className="resize-y rounded-md border border-border bg-surface/70 px-3 py-3 text-sm normal-case text-foreground outline-none transition-colors placeholder:text-subtle-foreground focus:border-primary/50"
                  placeholder="Tell me what you're thinking..."
                />
              </label>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p
                aria-live="polite"
                role={state === "error" ? "alert" : "status"}
                className={`min-h-5 text-xs ${state === "error" ? "text-destructive" : state === "success" ? "text-success" : "text-subtle-foreground"}`}
              >
                {notice}
              </p>
              <Button type="submit" disabled={state === "sending"} className="rounded-pill px-5">
                {state === "sending"
                  ? "SENDING..."
                  : state === "success"
                    ? "MESSAGE SENT"
                    : "SEND MESSAGE"}
                {state === "success" ? (
                  <Check aria-hidden="true" />
                ) : (
                  <ArrowRight aria-hidden="true" />
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <footer className="mt-12 flex flex-col items-center border-t border-border pt-6 text-center">
        <p className="font-display text-sm uppercase tracking-[0.2em]">MANVIOS</p>
        <p className="mt-2 text-xs text-muted-foreground">
          Built with curiosity, code and a little too much dreams.
        </p>
        <div className="mt-3 flex justify-center">
          <ContactLinks />
        </div>
      </footer>
    </section>
  );
}
