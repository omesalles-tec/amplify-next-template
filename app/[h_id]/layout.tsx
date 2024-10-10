"use client";
import { usePathname } from "next/navigation";
import ClientLayout from '@/app/components/clientLayout';

//import { Inter } from "next/font/google";
import "@/app/app.css";

//const inter = Inter({ subsets: ["latin"] });

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname().split("/");
  pathname.pop();
  const newPathname = pathname.join("/");

  const breadcrumbs = pathname.filter(Boolean).map((path, index, arr) => ({
    text: path.charAt(0).toUpperCase() + path.slice(1),
    href: "/" + arr.slice(0, index + 1).join("/"),
  }));

  return (
    <>
      <ClientLayout newPathname={newPathname} breadcrumbs={breadcrumbs}>
        {children}
      </ClientLayout>
    </>
  );
}
