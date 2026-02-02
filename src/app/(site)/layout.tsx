import Header from "@/components/header";
import Footer from "@/components/footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <main className="h-[80vh] overflow-y-auto">{children}</main>
      <Footer />
    </div>
  );
}
