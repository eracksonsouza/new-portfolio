"use client";

import { useState, useTransition } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { cn } from "@/lib/utils";

type FormState = {
  success?: boolean;
  error?: string;
  message?: string;
};

type ContactFormProps = {
  variant?: "default" | "split";
  className?: string;
};

export default function ContactForm({
  variant = "default",
  className,
}: ContactFormProps) {
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState<FormState>({});
  const isSplitVariant = variant === "split";

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await submitContactForm(formData);
      setFormState(result);

      if (result.success) {
        const form = document.getElementById("contact-form") as HTMLFormElement;
        form?.reset();
      }
    });
  }

  return (
    <form
      id="contact-form"
      action={handleSubmit}
      className={cn(
        "space-y-6",
        isSplitVariant
          ? "rounded-none border-none bg-transparent p-0 shadow-none"
          : "rounded-lg border border-white/10 bg-[var(--es-surface)] p-8 shadow-xl",
        className
      )}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          minLength={2}
          maxLength={100}
          disabled={isPending}
          className={cn(
            "w-full px-4 py-3 outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50",
            isSplitVariant
              ? "rounded-md border border-white/20 bg-[var(--es-surface-2)]/50 focus:border-[#fdb003]/70 focus:ring-2 focus:ring-[#fdb003]/20"
              : "rounded-lg border border-white/12 bg-[var(--es-surface-2)] focus:border-[#fdb003]/60 focus:ring-2 focus:ring-[#fdb003]/30"
          )}
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={isPending}
          className={cn(
            "w-full px-4 py-3 outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50",
            isSplitVariant
              ? "rounded-md border border-white/20 bg-[var(--es-surface-2)]/50 focus:border-[#fdb003]/70 focus:ring-2 focus:ring-[#fdb003]/20"
              : "rounded-lg border border-white/12 bg-[var(--es-surface-2)] focus:border-[#fdb003]/60 focus:ring-2 focus:ring-[#fdb003]/30"
          )}
          placeholder="seu.email@exemplo.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Assunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          minLength={5}
          maxLength={200}
          disabled={isPending}
          className={cn(
            "w-full px-4 py-3 outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50",
            isSplitVariant
              ? "rounded-md border border-white/20 bg-[var(--es-surface-2)]/50 focus:border-[#fdb003]/70 focus:ring-2 focus:ring-[#fdb003]/20"
              : "rounded-lg border border-white/12 bg-[var(--es-surface-2)] focus:border-[#fdb003]/60 focus:ring-2 focus:ring-[#fdb003]/30"
          )}
          placeholder="Sobre o que você quer falar"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={1000}
          rows={6}
          disabled={isPending}
          className={cn(
            "w-full resize-none px-4 py-3 outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50",
            isSplitVariant
              ? "rounded-md border border-white/20 bg-[var(--es-surface-2)]/50 focus:border-[#fdb003]/70 focus:ring-2 focus:ring-[#fdb003]/20"
              : "rounded-lg border border-white/12 bg-[var(--es-surface-2)] focus:border-[#fdb003]/60 focus:ring-2 focus:ring-[#fdb003]/30"
          )}
          placeholder="Sua mensagem"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className={cn(
          "flex w-full items-center justify-center gap-2 px-6 py-3 font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50",
          isSplitVariant
            ? "rounded-md bg-[#fdb003] text-black uppercase tracking-[0.18em] hover:bg-[#e3a003]"
            : "rounded-lg bg-[#fdb003] text-black hover:bg-[#e5a003]"
        )}
      >
        {isPending ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Enviando...
          </>
        ) : (
          isSplitVariant ? "Enviar" : "Enviar Mensagem"
        )}
      </button>

      {formState.success && (
        <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg">
          <p className="text-green-400 text-center">
            ✓ {formState.message || "Mensagem enviada com sucesso!"}
          </p>
        </div>
      )}

      {formState.error && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
          <p className="text-red-400 text-center">✗ {formState.error}</p>
        </div>
      )}
    </form>
  );
}
