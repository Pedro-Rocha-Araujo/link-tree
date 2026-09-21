'use client'

import { useState, useEffect } from "react"
import Link from "next/link";
import "./home.css"
import { useParams } from "next/navigation";
import db from "@/FirebaseConnection";
import { collection, getDocs } from "firebase/firestore";
import { LinkInterface } from "@/interfaces";
import { UsuarioInterface } from "@/interfaces"
import { toast } from "react-toastify";

export default function Home() {
  const [usuario, setUsuario] = useState<UsuarioInterface | null>(null)
  const [meusLinks, setMeusLinks] = useState<LinkInterface[]>([])

  const ref = collection(db, "links")

  const { id_usuario } = useParams()
  const link = `${window.location.origin}`

  useEffect(()=> {
    async function getUsuario() {
      try {
        if(!id_usuario) {
          return
        }
        const userRef = collection(db, "users")
        const response = await getDocs(userRef)
        const usuarioEncontrado = response.docs.find((item)=> {
          const dados = item.data()
          return dados.id_usuario === id_usuario
        })
        if(usuarioEncontrado) {
          const data = usuarioEncontrado.data()
          setUsuario({
            id: usuarioEncontrado.id,
            nome: data.nome,
            id_usuario: data.id_usuario
          })
        }
      } catch(erro) {
        console.log(`Erro ao buscar o usuário -> ${erro}`)
      }
    }
    getUsuario()
  }, [id_usuario])

  useEffect(()=>{
    async function getLinks() {
      try { 
        const response = await getDocs(ref)
        const array = response.docs.map((item)=> {
          const dados = item.data()
          return {
            id: item.id,
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
  
  function copiarLink() {
    toast.success("Link copiado!")
    navigator.clipboard.writeText(`${link}/public/${id_usuario}/`)
  }

  return (
    <section className="home">
      <h1> <i className="fa-solid fa-link"></i> {usuario ? usuario.nome : "Meus Links"}</h1>
      <div className="links">

        { meusLinks.length < 1 ? (
          <h3 className="erro">Nenhum link cadastrado até o momento!</h3>
        ) : (
          meusLinks.map((link)=> {
            if(link.tipo === "Portfólio") {
              return (
                <Link 
                  key={link.id}
                  className="link" 
                  href={link.caminho}
                  target="_blank"
              > <i className="fa-solid fa-display" aria-hidden="true"></i> Portfólio</Link>
              )
            }
            return (
              <Link 
                key={link.id}
                className="link" 
                href={link.caminho}
                target="_blank"
              > <i className={"fa-brands fa-"+link.tipo.toLowerCase()} aria-hidden="true"></i> {link.tipo}</Link>
            )
          })
        ) }
      
      </div>
      <Link className="link-footer" href={`/admin/${id_usuario}/gerenciar-links`}>Gerenciar Links</Link>
      <div onClick={copiarLink} className="copiar-link">
        <p className="pc">{link}/public/{id_usuario}/</p>
        <p className="mobile">Copiar Link</p>
        <i className="fa-regular fa-copy fa-lg"></i>
      </div>
    </section>
  );
}
