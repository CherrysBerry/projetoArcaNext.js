import Link from "next/dist/client/link";
export default function Header(){
    return(
        <header>
        <h1 id = "logo">Projeto Arca</h1>
        <nav>
          <ul>
            <li>
              <Link href="/agendeSuaConsulta">Agende sua consulta</Link>
            </li>
            <li>
              <Link href="/adocao">Adoção</Link>
            </li>
            <li>
              <Link href="/denuncias">Denúncias</Link>
            </li>
            <li>
              <Link href="/solicitacoes">Solicitações</Link>
            </li>
            <li>
              <Link href="/saibaMais">Saiba Mais</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}