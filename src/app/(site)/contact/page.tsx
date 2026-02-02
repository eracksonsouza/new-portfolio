import ContactForm from "@/components/contact-form";
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
    <div className="bg-[#0a0a0a] h-full text-white overflow-y-auto">
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-2xl">
        <div className="space-y-6 md:space-y-8">
          <div className="text-center space-y-3 md:space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Entre em <span className="text-[#fdb003]">Contato</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg">
              Tem uma pergunta ou quer trabalhar junto? Fique à vontade para
              entrar em contato!
            </p>
          </div>

          <ContactForm />
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
