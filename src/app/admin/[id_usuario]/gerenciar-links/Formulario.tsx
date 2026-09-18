import { TipoAlias } from "./page"
import { LinkInterface } from "@/interfaces"

interface FormularioProps {
  cadastrarLink: (e:React.FormEvent<HTMLFormElement>)=> void,
  caminho: string,
  tipo: TipoAlias,
  setTipo: (e: TipoAlias)=> void,
  setCaminho: (e: string)=> void,
  meusLinks: LinkInterface[]
}

export default function Formulario(
  { cadastrarLink, caminho, tipo, setTipo, setCaminho, meusLinks }: FormularioProps) 
{
  return (
    <form onSubmit={cadastrarLink}>
        <input 
          placeholder="Cole o caminho do link"
          type="text"
          value={caminho}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setCaminho(e.target.value)}
          required
        />

        <select defaultValue={tipo} onChange={(e)=>setTipo(e.target.value as TipoAlias) }>
          <option value="" disabled>Selecione o tipo do link que deseja adicionar</option>
          <option disabled={meusLinks.some((i)=> i.tipo==='Youtube')} value="Youtube">Youtube</option>
          <option disabled={meusLinks.some((i)=> i.tipo==='Linkedin')} value="Linkedin">Linkedin</option>
          <option disabled={meusLinks.some((i)=> i.tipo==='Github')} value="Github">Github</option>
          <option disabled={meusLinks.some((i)=> i.tipo==='Portfólio')} value="Portfólio">Portfólio</option>
        </select>

        <button>Adicionar</button>
    </form>
  )
}