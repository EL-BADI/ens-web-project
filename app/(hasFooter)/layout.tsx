import Footer from "@/components/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className=" min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
