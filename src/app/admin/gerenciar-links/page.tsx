'use client'

import { useState } from "react"
import "./gerenciar-links.css"
import Listagem from "./Listagem"

type TipoAlias = "Linkedin" | "Linkedin" | "Github" | "Portfólio" | ""

export default function GerenciarLinks() {
  const [caminho, setCaminho] = useState<string>("")
  const [tipo, setTipo] = useState<TipoAlias>("")

  return (
    <section className="gerenciar-links">
      <h1> <i className="fa-solid fa-gear" aria-hidden="true"></i> Gerencie seus Links</h1>
      <form>
        <h2>{tipo}</h2>
        <input 
          placeholder="Cole o caminho do link"
          type="text"
          onChange={(e)=>setCaminho(e.target.value)}
          required
        />

        <select onChange={(e)=>setTipo(e.target.value)}>
          <option value="" disabled selected>Selecione o tipo do link que deseja adicionar</option>
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