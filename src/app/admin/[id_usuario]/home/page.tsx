'use client'
import { useState, useEffect } from "react"
import Link from "next/link";
import "./home.css"
import { useParams } from "next/navigation";
import db from "@/FirebaseConnection";
import { collection, getDocs } from "firebase/firestore";
import { LinkInterface } from "@/interfaces";

export default function Home() {
  const [meusLinks, setMeusLinks] = useState<[LinkInterface]>([])

  const ref = collection(db, "links")

  const { id_usuario } = useParams()

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

  return (
    <section className="home">
      <h1> <i className="fa-solid fa-link" aria-hidden="true"></i> Pedro Rocha Araujo</h1>
      <div className="links">

        { meusLinks.length < 1 ? (
          <h3 className="erro">Nenhum link cadastrado até o momento!</h3>
        ) : (
          meusLinks.map((link)=> {
            if(link.tipo === "Portfólio") {
              return (
                <a 
                  key={link.id}
                  className="link" 
                  href={link.caminho}
                > <i className="fa-solid fa-display" aria-hidden="true"></i> Portfólio</a>
              )
            }
            return (
              <a 
                key={link.id}
                className="link" 
                href={link.caminho}
                > <i className={"fa-brands fa-"+link.tipo.toLowerCase()} aria-hidden="true"></i> {link.tipo}</a>
            )
          })
        ) }
      
      </div>
      <Link id="link-footer" href={`/admin/${id_usuario}/gerenciar-links`}>Gerenciar Links</Link>
    </section>
  );
}
