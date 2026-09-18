'use client'

import { useState } from "react"
import "./gerenciar-links.css"
import Listagem from "./Listagem"
import { toast } from "react-toastify"
import db from "@/FirebaseConnection"
import { addDoc, collection } from "firebase/firestore"
import { useParams } from "next/navigation"  

type TipoAlias = "Linkedin" | "Linkedin" | "Github" | "Portfólio" | ""

export default function GerenciarLinks() {
  const [caminho, setCaminho] = useState<string>("")
  const [tipo, setTipo] = useState<TipoAlias>("")

  const { id_usuario } = useParams()

  async function cadastrarLink(e: React.FormEvent) {
    e.preventDefault()
    try {
      if(!caminho || !tipo) {
        toast.error("Erro!")
        return
      }
      const ref = collection(db, "links")
      await addDoc(ref, {
        caminho: caminho,
        tipo: tipo,
        id_usuario: id_usuario
      })
      setCaminho("")
      setTipo("")
      toast.success("Link cadastrado.")
    } catch(erro) {
      console.log(erro) 
      toast.error("Erro!")
    }
  }

  return (
    <section className="gerenciar-links">
      <h1> <i className="fa-solid fa-gear" aria-hidden="true"></i> Gerencie seus Links</h1>
      <form onSubmit={cadastrarLink}>
        <input 
          placeholder="Cole o caminho do link"
          type="text"
          value={caminho}
          onChange={(e)=>setCaminho(e.target.value)}
          required
        />

        <select defaultValue={tipo} onChange={(e)=>setTipo(e.target.value)}>
          <option value="" disabled selected >Selecione o tipo do link que deseja adicionar</option>
          <option value="Youtube">Youtube</option>
          <option value="Linkedin">Linkedin</option>
          <option value="Github">Github</option>
          <option value="Portfólio">Portfólio</option>
        </select>

        <button>Adicionar</button>

      </form>

      <h2> <i className="fa-solid fa-link" aria-hidden="true"></i> Seus links</h2>
      <Listagem />

    </section>
  )
}