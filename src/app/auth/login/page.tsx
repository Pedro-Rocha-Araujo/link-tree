'use client'

import "../auth.css"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Cookies from "js-cookie"

import auth from "@/authConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState<string>("")
  const [senha, setSenha] = useState<string>("")

  const router = useRouter()

  async function logarUsuario(e:React.FormEvent) {
    e.preventDefault()
    try { 
      if(!email || !senha) {
        toast.error("Preencha todos os campos")
        return
      }
      const response = await signInWithEmailAndPassword(auth, email, senha)
      Cookies.set("token", response.user.uid)
      router.push(`/admin/${response.user.uid}/home/`)
    } catch(erro: unknown) {
      console.log(erro)
      if(erro.code === "auth/invalid-credential") {
        toast.error("Dados inválidos!")
        return
      }
      toast.error("Erro!")
      }
    } 

  return (
    <section className="auth">

      <div className="auth">

        <div className="header-auth">
          <h1>Fazer login!</h1>
        </div>

        <form onSubmit={logarUsuario}>
          <input
            type="email"
            placeholder="Digite seu E-mail"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input 
            type="password"
            placeholder="Digite sua senha"
            required
            value={senha}
            onChange={(e)=>setSenha(e.target.value)}
          />
          <button>Entrar</button>
        </form>

        <div className="footer-auth">
          <p>Não possui uma conta? <Link href="/auth/cadastro">Criar</Link></p>
        </div>

      </div>

    </section>
  );
}
