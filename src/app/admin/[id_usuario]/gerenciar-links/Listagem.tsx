import { LinkInterface } from "@/interfaces"

interface ListagemProps {
  meusLinks: LinkInterface[],
  deletarLink: (id: string)=> void
}

export default function Listagem({ meusLinks, deletarLink }: ListagemProps ) {
  return (
    <div className="links">

      { meusLinks.length === 0 ? (
        <h3 className="erro">Nenhum link cadastrado até o momento!</h3>
      ) : (
        meusLinks.map((link)=> {
          return (
            <div key={link.id} className="link">
              { link.tipo === "Portfólio" ? (
                <h3> <i className="fa-solid fa-display" aria-hidden="true"></i> Portfólio</h3>
              ) : (
                <h3><i className={"fa-brands fa-"+link.tipo.toLowerCase()} 
                aria-hidden="true"></i> {link.tipo}</h3>
              ) }
              <div className="botoes">
                <i className="fa-solid fa-pen-to-square fa-lg" aria-hidden="true"></i>
                <i onClick={()=>deletarLink(link.id)} className="fa-solid fa-trash fa-lg" aria-hidden="true"></i>
              </div>
            </div>
          )
        })

      ) }

      
    </div>
  )
}