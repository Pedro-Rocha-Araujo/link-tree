'use client'
import "../auth.css"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "@/AuthConnection";
import Cookies from "js-cookie"

export default function Cadastro() {
  const [email, setEmail] = useState<string>("")
  const [senha, setSenha] = useState<string>("")

  const router = useRouter()

  async function cadastrarUsuario(e:React.FormEvent) {
    e.preventDefault()
    try { 
      if(!email || !senha) {
        toast.error("Preencha todos os campos")
        return
      }
      const response = await createUserWithEmailAndPassword(auth, email, senha)
      Cookies.set("token", response.user.uid)
      router.push(`/admin/${response.user.uid}/home/`)
    } catch(erro: unknown) {
      console.log(erro)
      if(erro.code === "auth/email-already-in-use") {
        toast.error("Email já em uso!")
        return
      }
      if(erro.code === "auth/weak-password") {
        toast.error("Senha fraca!")
        return
      }
      toast.error("Erro!")
    }
  } 

  return (
    <section className="auth">

      <div className="auth">

        <div className="header-auth">
          <h1>Criar conta!</h1>
        </div>

        <form onSubmit={cadastrarUsuario}>
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
          <button>Cadastrar</button>
        </form>

        <div className="footer-auth">
          <p>Já possui um cadastro? <Link href="/auth/login">Cadastrar</Link></p>
        </div>

      </div>

    </section>
  );
}
