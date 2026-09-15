import "../auth.css"
import Link from "next/link";

export default function Cadastro() {
  return (
    <section className="auth">

      <div className="auth">

        <div className="header-auth">
          <h1>Criar conta!</h1>
        </div>

        <form>
          <input
            type="email"
            placeholder="Digite seu E-mail"
          />
          <input 
            type="password"
            placeholder="Digite sua senha"
          />
          <button>Cadastrar</button>
        </form>

        <div className="footer-auth">
          <p>Já possui um cadastro? <Link href="/auth/login">Cadastrar</Link></p>
        </div>

      </div>

    </section>
  );
}
