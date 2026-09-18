import type { Metadata } from "next";
import Script from "next/script";

import { ToastContainer } from "react-toastify";
import "./globals.css";

export const metadata: Metadata = {
  title: "Link Tree",
  description: "Projeto next - Árvore de Links para anexo de redes sociais",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-Br">
      <body>
        <ToastContainer autoClose={1000} />
        {children}
        <Script src="https://kit.fontawesome.com/ba7c57d421.js"></Script>
      </body>
    </html>
  );
}
