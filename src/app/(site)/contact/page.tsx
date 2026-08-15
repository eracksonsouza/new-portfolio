import ContactForm from "@/components/contact-form";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com Erackson Souza para discutir projetos, oportunidades de colaboração ou tirar dúvidas sobre desenvolvimento web.",
  keywords: [
    "Contato Erackson Souza",
    "Orçamento",
    "Projetos",
    "Colaboração",
    "Desenvolvedor para contratar",
  ],
  openGraph: {
    title: "Contato | Erackson Souza",
    description:
      "Entre em contato com Erackson Souza para discutir projetos, oportunidades de colaboração ou tirar dúvidas sobre desenvolvimento web.",
    url: "https://erackson-souza.vercel.app/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://erackson-souza.vercel.app/contact",
  },
};

const ContactPage = () => {
  return (
    <div className="min-h-[calc(100dvh-10vh)] overflow-y-auto bg-[var(--es-bg-soft)] text-white">
      <main className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <section className="space-y-10">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#fdb003]">
                Vamos conversar
              </p>
              <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                Entre em <span className="text-[#fdb003]">Contato</span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
                Estou sempre aberto para discutir novos projetos, ideias e
                oportunidades de colaboração. Se quiser trocar uma ideia, me
                chama.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-400">
                Prefere falar por e-mail?
              </p>
              <Link
                href="mailto:erackson05@gmail.com"
                className="inline-block text-lg font-semibold text-[#fdb003] transition-colors hover:text-[#ffd166]"
              >
                erackson05@gmail.com
              </Link>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-[var(--es-surface)]/70 p-6 shadow-xl md:p-8">
            <ContactForm variant="split" />
          </section>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
