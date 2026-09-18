import { TipoAlias } from "./page"

interface FormularioProps {
  cadastrarLink: (e:React.FormEvent<HTMLFormElement>)=> void,
  caminho: string,
  tipo: TipoAlias,
  setTipo: (e: TipoAlias)=> void,
  setCaminho: (e: string)=> void
}

export default function Formulario({ cadastrarLink, caminho, tipo, setTipo, setCaminho }: FormularioProps) {
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
          <option value="" disabled selected >Selecione o tipo do link que deseja adicionar</option>
          <option value="Youtube">Youtube</option>
          <option value="Linkedin">Linkedin</option>
          <option value="Github">Github</option>
          <option value="Portfólio">Portfólio</option>
        </select>

        <button>Adicionar</button>
    </form>
  )
}