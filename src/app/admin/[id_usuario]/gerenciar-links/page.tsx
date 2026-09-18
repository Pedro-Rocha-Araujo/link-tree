'use client'

import { useState } from "react"
import { useParams } from "next/navigation"  
import "./gerenciar-links.css"
import Formulario from "./Formulario"
import Listagem from "./Listagem"
import { toast } from "react-toastify"
import db from "@/FirebaseConnection"
import { addDoc, collection } from "firebase/firestore"

export type TipoAlias = "Linkedin" | "Linkedin" | "Github" | "Portfólio" | ""

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
      <Formulario 
        cadastrarLink={cadastrarLink} 
        caminho={caminho} 
        tipo={tipo} 
        setTipo={setTipo} 
        setCaminho={setCaminho}
      />

      <h2> <i className="fa-solid fa-link" aria-hidden="true"></i> Seus links</h2>
      <Listagem />

    </section>
  )
}