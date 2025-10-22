import { Metadata } from "next";
import Header from "@/components/header";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Portfolio",
  description:
    "Get in touch with me. Send a message and I'll get back to you as soon as possible.",
};

const ContactPage = () => {
  return (
    <div className="bg-[#2a2a2c] min-h-screen text-white">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-2xl mt-10">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Entre em <span className="text-[#fdb003]">Contato</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Tem uma pergunta ou quer trabalhar junto? Fique à vontade para entrar em contato!
            </p>
          </div>

          {/* Contact Form */}
          <ContactForm />

        </div>
      </main>
    </div>
  );
};

export default ContactPage;
