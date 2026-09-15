import "../auth.css"
import Link from "next/link";

export default function Login() {
  return (
    <section className="auth">

      <div className="auth">

        <div className="header-auth">
          <h1>Fazer Login!</h1>
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
          <button>Entrar</button>
        </form>

        <div className="footer-auth">
          <p>Não possui uma conta? <Link href="/auth/cadastro">Criar</Link></p>
        </div>

      </div>

    </section>
  );
}
