import Link from "next/link";
import styles from "./Header.module.css";
export default function Header(){
    return(
        <header className={styles.header}>
        <Link href="/" id="logo" className={styles.logo}>Projeto Arca</Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/agendeSuaConsulta" className={styles.navLink}>Agende sua consulta</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/adocao" className={styles.navLink}>Adoção</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/denuncias" className={styles.navLink}>Denúncias</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/solicitacoes" className={styles.navLink}>Solicitações</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/saibaMais" className={styles.navLink}>Saiba Mais</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}