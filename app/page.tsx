import Header from "@/components/Header";
import Link from "next/dist/client/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen font-sans">
      <Header />
      <main>
        <div className="meio">
          <h3>ARCA - Animais resgatados, cuidados e acolhidos</h3>
          <h4>Plataforma dedicada à proteção animal, adoção responsável, denúncias e serviços comunitários voltados ao cuidado e bem-estar.</h4>
          <div className = "cardsOrdem">
            <div className = "card">
              <h4>Agendamento</h4>
              <p>Agende consultas e atendimentos rapidamente pelo sistema.</p>
              <button>
                <Link href="/agendeSuaConsulta">Agendar</Link>
              </button>
            </div>
            <div className = "card">
              <h4>Adoção</h4>
              <p>Veja animais disponíveis e participe do processo de adoção.</p>
              <button>
                <Link href="/adocao">Adotar</Link>
              </button>
            </div>
            <div className = "card">
              <h4>Denúncias</h4>
              <p>Reporte situações de risco e maus-tratos de forma segura.</p>
              <button>
                <Link href="/denuncias">Denunciar</Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
