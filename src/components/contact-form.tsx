"use client";

import { useState, useTransition } from "react";
import { submitContactForm } from "@/app/actions/contact";

type FormState = {
  success?: boolean;
  error?: string;
  message?: string;
};

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState<FormState>({});

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
      className="space-y-6 rounded-lg border border-white/10 bg-[var(--es-surface)] p-8 shadow-xl"
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
          className="w-full rounded-lg border border-white/12 bg-[var(--es-surface-2)] px-4 py-3 outline-none transition-all focus:border-[#fdb003]/60 focus:ring-2 focus:ring-[#fdb003]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
          className="w-full rounded-lg border border-white/12 bg-[var(--es-surface-2)] px-4 py-3 outline-none transition-all focus:border-[#fdb003]/60 focus:ring-2 focus:ring-[#fdb003]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
          className="w-full rounded-lg border border-white/12 bg-[var(--es-surface-2)] px-4 py-3 outline-none transition-all focus:border-[#fdb003]/60 focus:ring-2 focus:ring-[#fdb003]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
          className="w-full resize-none rounded-lg border border-white/12 bg-[var(--es-surface-2)] px-4 py-3 outline-none transition-all focus:border-[#fdb003]/60 focus:ring-2 focus:ring-[#fdb003]/30 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Sua mensagem"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#fdb003] px-6 py-3 font-semibold text-black transition-colors hover:bg-[#e5a003] disabled:cursor-not-allowed disabled:opacity-50"
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
          "Enviar Mensagem"
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
