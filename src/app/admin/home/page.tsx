'use client'
import Link from "next/link";
import "./home.css"

export default function Home() {
  return (
    <section className="home">
      <h1> <i className="fa-solid fa-link" aria-hidden="true"></i> Pedro Rocha Araujo</h1>
      <div className="links">

        <a className="link" href=""> <i className="fa-brands fa-youtube" aria-hidden="true"></i> Canal no Youtube</a>

        <a className="link" href=""> <i className="fa-brands fa-linkedin" aria-hidden="true"></i> Linkedin</a>

        <a className="link" href=""> <i className="fa-brands fa-github" aria-hidden="true"></i> Github</a>
        
        <a className="link" href=""> <i className="fa-solid fa-display" aria-hidden="true"></i> Portfólio</a>
      
      </div>
      <Link id="link-footer" href={"/gerenciar-links"}>Gerenciar Links</Link>
    </section>
  );
}
