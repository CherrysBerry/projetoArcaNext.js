import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./adocao.module.css";

export default function Adocao() {
    return (
        <div>
            <Header />
            <main id={styles.main}>
                <section className={styles.adoptionPage}>
                    <h1 className = {styles.adoptionTitle}>Adoção</h1>
                    <div className={styles.adoptionWrapper}>
                        <aside className={styles.adoptionSidebar}>
                            
                        </aside>
                    </div>
                </section>      
            </main>
            <Footer />
        </div>

    )
}