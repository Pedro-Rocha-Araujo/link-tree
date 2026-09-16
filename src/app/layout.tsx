import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
