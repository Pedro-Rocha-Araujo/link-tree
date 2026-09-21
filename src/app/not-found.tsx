'use client'
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"

export default function NotFound() {

  const router = useRouter()
  const id_usuario = Cookies.get("token")

  function irParaHome() {
    if(!id_usuario) {
      router.push("/admin/login")
    }
    router.push(`/admin/${id_usuario}/home/`)
  }

  return (
    <section className="not-found">
      <h1> <i className="fa-solid fa-triangle-exclamation"></i> Erro!</h1>
      <p>Página não encontrada!</p>
      <button onClick={irParaHome}>Ir para a Home</button>
    </section>
  )
}