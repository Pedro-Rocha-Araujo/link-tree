'use client'

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"  
import "./gerenciar-links.css"
import Formulario from "./Formulario"
import Listagem from "./Listagem"
import { toast } from "react-toastify"
import db from "@/FirebaseConnection"
import { getDocs, addDoc, collection } from "firebase/firestore"
import { LinkInterface } from "@/interfaces"

export type TipoAlias = "Linkedin" | "Linkedin" | "Github" | "Portfólio" | ""

export default function GerenciarLinks() {
  const [meusLinks, setMeusLinks] = useState<LinkInterface[]>([])
  const [caminho, setCaminho] = useState<string>("")
  const [tipo, setTipo] = useState<TipoAlias>("")

  const { id_usuario } = useParams()
  const ref = collection(db, "links")

  async function cadastrarLink(e: React.FormEvent) {
    e.preventDefault()
    try {
      if(!caminho || !tipo) {
        toast.error("Erro!")
        return
      }
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

  useEffect(()=>{
    async function getLinks() {
      try { 
        const response = await getDocs(ref)
        const array = response.docs.map((item)=> {
          const dados = item.data()
          return {
            id_usuario: dados.id_usuario,
            caminho: dados.caminho,
            tipo: dados.tipo
          }
        })
        setMeusLinks(array.filter((i)=> {
          return i.id_usuario === id_usuario
        }))
      } catch(erro) {
        console.log(erro)
      }
    }
    getLinks()
  }, [])

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
      <Listagem 
        meusLinks={meusLinks}
      />

    </section>
  )
}