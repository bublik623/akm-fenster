"use client";

import { useEffect, useRef, useState, useTransition, type FocusEvent, type FormEvent } from "react";
import { submitCallbackRequest } from "../actions";
import { contact, PRODUCT_REQUEST_EVENT } from "../_data/site";

const inputClass =
  "min-h-12 rounded-none border border-chip-line bg-white p-3.5 text-base font-normal text-ink transition-colors aria-invalid:border-danger";
const labelClass = "flex flex-col gap-1.5 text-sm font-semibold text-ink";

type Field = "name" | "tel" | "mail";

const messages: Record<Field, string> = {
  name: "Bitte geben Sie Ihren Namen an.",
  tel: "Bitte geben Sie eine Telefonnummer an, unter der wir Sie erreichen.",
  mail: "Diese E-Mail-Adresse sieht unvollständig aus.",
};

function validate(field: Field, value: string): string | null {
  const v = value.trim();
  if (field === "name") return v ? null : messages.name;
  if (field === "tel") return v.replace(/\D/g, "").length >= 6 ? null : messages.tel;
  return !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : messages.mail;
}

function Optional({ label }: { label: string }) {
  return (
    <span className="flex justify-between">
      {label} <span className="font-normal text-gray">optional</span>
    </span>
  );
}

function FieldError({ id, error }: { id: string; error?: string | null }) {
  return (
    <span id={id} aria-live="polite" className="min-h-0 text-[0.8125rem] font-normal text-danger empty:hidden">
      {error ?? ""}
    </span>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Partial<Record<Field, string | null>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  // Product CTAs elsewhere on the page prefill the message.
  useEffect(() => {
    const onRequest = (e: Event) => {
      const name = (e as CustomEvent<string>).detail;
      setSent(false);
      setMessage((m) => (m.includes(name) ? m : m ? `${m}, ${name}` : `Interesse an: ${name}`));
    };
    window.addEventListener(PRODUCT_REQUEST_EVENT, onRequest);
    return () => window.removeEventListener(PRODUCT_REQUEST_EVENT, onRequest);
  }, []);

  // Validate when leaving a filled-in field (tabbing past an empty one isn't an error yet);
  // once a field shows an error, re-check it as the user types.
  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    const field = e.target.name as Field;
    if (e.target.value || errors[field]) setErrors((s) => ({ ...s, [field]: validate(field, e.target.value) }));
  };
  const onInput = (e: FormEvent<HTMLInputElement>) => {
    const field = e.currentTarget.name as Field;
    if (errors[field]) setErrors((s) => ({ ...s, [field]: validate(field, e.currentTarget.value) }));
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next = {
      name: validate("name", String(data.get("name"))),
      tel: validate("tel", String(data.get("tel"))),
      mail: validate("mail", String(data.get("mail"))),
    };
    setErrors(next);
    const firstInvalid = (Object.keys(next) as Field[]).find((f) => next[f]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLInputElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setSubmitError(null);
    startTransition(async () => {
      try {
        const res = await submitCallbackRequest(data);
        if (res.ok) setSent(true);
        else setSubmitError(res.error ?? "Senden fehlgeschlagen.");
      } catch {
        setSubmitError(`Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder rufen Sie uns an: ${contact.phone}`);
      }
    });
  };

  const reset = () => {
    setSent(false);
    setMessage("");
    setErrors({});
  };

  if (sent) {
    return (
      <div role="status" className="flex animate-[fade-in_400ms_var(--ease-settle)] flex-col gap-4">
        <h3 className="m-0 font-serif text-[2.5rem] leading-[1.05] font-normal">
          Danke! <em className="text-bronze">Wir rufen zurück.</em>
        </h3>
        <p className="m-0 text-base leading-relaxed text-body">
          Wir melden uns in der Regel innerhalb eines Werktags bei Ihnen.
        </p>
        <button
          type="button"
          onClick={reset}
          className="press cursor-pointer self-start rounded-full border border-chip-line px-[1.375rem] py-3.5 text-[0.9375rem] text-ink active:bg-ink/5"
        >
          Neue Anfrage
        </button>
      </div>
    );
  }

  const fieldProps = (field: Field) => ({
    name: field,
    onBlur,
    onInput,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": `${field}-error`,
    className: inputClass,
  });

  return (
    <form ref={formRef} onSubmit={submit} noValidate className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="m-0 font-serif text-[2.125rem] leading-[1.1] font-normal">Rückruf anfordern</h3>
        <p className="m-0 text-[0.9375rem] leading-normal text-muted">
          Name und Telefonnummer genügen. Weitere Angaben sind freiwillig.
        </p>
      </div>
      <label className={labelClass}>
        <span>Name *</span>
        <input required autoComplete="name" {...fieldProps("name")} />
        <FieldError id="name-error" error={errors.name} />
      </label>
      <label className={labelClass}>
        <span>Telefon *</span>
        <input required type="tel" autoComplete="tel" inputMode="tel" {...fieldProps("tel")} />
        <FieldError id="tel-error" error={errors.tel} />
      </label>
      <label className={labelClass}>
        <Optional label="E-Mail" />
        <input type="email" autoComplete="email" {...fieldProps("mail")} />
        <FieldError id="mail-error" error={errors.mail} />
      </label>
      <label className={labelClass}>
        <Optional label="Nachricht" />
        <textarea
          name="msg"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-y`}
        />
      </label>
      {submitError && (
        <p role="alert" className="m-0 border-l-2 border-danger pl-3 text-sm text-danger">
          {submitError}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        aria-busy={pending}
        className="press inline-flex min-h-[3.25rem] cursor-pointer items-center justify-center gap-3 rounded-full bg-ink px-[1.625rem] py-4 text-base font-semibold text-cream disabled:cursor-wait disabled:opacity-80"
      >
        {pending && (
          <span
            aria-hidden="true"
            className="size-4 animate-spin rounded-full border-2 border-cream/30 border-t-cream"
          />
        )}
        {pending ? "Wird gesendet…" : "Rückruf anfordern"}
      </button>
      <p className="m-0 text-[0.8125rem] leading-normal text-muted">
        Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer Angaben zur Bearbeitung Ihrer Anfrage
        einverstanden. Mehr in unserer{" "}
        <a href={contact.datenschutz} className="text-ink">
          Datenschutzerklärung
        </a>
        .
      </p>
    </form>
  );
}
