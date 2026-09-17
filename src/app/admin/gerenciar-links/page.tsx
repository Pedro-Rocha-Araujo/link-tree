import "./gerenciar-links.css"

export default function GerenciarLinks() {
  return (
    <section className="gerenciar-links">
      <h1> <i className="fa-solid fa-gear" aria-hidden="true"></i> Gerencie seus Links</h1>
      <form>

        <input 
          placeholder="Cole o caminho do link"
          type="text"
          required
        />

        <select defaultValue={""}>
          <option value="" disabled selected>Selecione o tipo do link que deseja adicionar</option>
          <option value="Youtube">Youtube</option>
          <option value="Linkedin">Linkedin</option>
          <option value="Github">Github</option>
          <option value="Portfólio">Portfólio</option>
        </select>

        <button>Salvar alterações</button>

      </form>

      <h2> <i className="fa-solid fa-link" aria-hidden="true"></i> Seus links</h2>

      <div className="links">

        <div className="link">
          <h3><i className="fa-brands fa-youtube" aria-hidden="true"></i> Youtube</h3>
          <div className="botoes">
            <i className="fa-solid fa-pen-to-square fa-xl" aria-hidden="true"></i>
            <i className="fa-solid fa-trash fa-xl" aria-hidden="true"></i>
          </div>
        </div>

        <div className="link">
          <h3> <i className="fa-brands fa-linkedin" aria-hidden="true"></i> Linkedin</h3>
          <div className="botoes">
            <i className="fa-solid fa-pen-to-square fa-xl" aria-hidden="true"></i>
            <i className="fa-solid fa-trash fa-xl" aria-hidden="true"></i>
          </div>
        </div>

        <div className="link">
          <h3> <i className="fa-brands fa-github" aria-hidden="true"></i> Github</h3>
          <div className="botoes">
            <i className="fa-solid fa-pen-to-square fa-xl" aria-hidden="true"></i>
            <i className="fa-solid fa-trash fa-xl" aria-hidden="true"></i>
          </div>
        </div>

        <div className="link">
          <h3> <i className="fa-solid fa-display" aria-hidden="true"></i> Portfólio</h3>
          <div className="botoes">
            <i className="fa-solid fa-pen-to-square fa-xl" aria-hidden="true"></i>
            <i className="fa-solid fa-trash fa-xl" aria-hidden="true"></i>
          </div>
        </div>
      
      </div>
    </section>
  )
}