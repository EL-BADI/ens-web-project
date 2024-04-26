import Center from "@/components/Center";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Center>{children}</Center>;
}
