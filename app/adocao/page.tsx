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
                            <div className={styles.filterHeader}>
                                <span className = {styles.filterToggle}>
                                    <i className="faSolid faChevronDown"></i>
                                    <h3>Filtros</h3>
                                </span>
                            </div>
                            <div className={styles.filterSection}>
                                <h4>Espécie</h4>
                                <div className = {styles.filterOptions}>
                                    <label className = {styles.toggleFilter}>
                                        <input type="checkbox" value="gato" className = {styles.filterCheckbox}/>
                                        <span className = {styles.toggleSwitch}></span>
                                        <span className = {styles.labelText}>Gato</span>
                                    </label>
                                    <label className = {styles.toggleFilter}>
                                        <input type="checkbox" value="cachorro" className = {styles.filterCheckbox}/>
                                        <span className = {styles.toggleSwitch}></span>
                                        <span className = {styles.labelText}>Cachorro</span>
                                    </label>
                                </div>
                            </div>
                            <div className = {styles.filterSection}>
                                <h4>Gêneros</h4>
                                <div className = {styles.filterOptions}>
                                    <label className = {styles.toggleFilter}>
                                        <input type="checkbox" value="femea" className = {styles.filterCheckbox}/>
                                        <span className = {styles.toggleSwitch}></span>
                                        <span className = {styles.labelText}>Fêmea</span>
                                    </label>
                                    <label className = {styles.toggleFilter}>
                                        <input type="checkbox" value="macho" className = {styles.filterCheckbox}/>
                                        <span className = {styles.toggleSwitch}></span>
                                        <span className = {styles.labelText}>Macho</span>
                                    </label>
                                </div>
                            </div>
                            <div className = {styles.filterSection}>
                                <h4>Porte</h4>
                                <div className = {styles.filterOptions}>
                                    <label className = {styles.toggleFilter}>
                                        <input type="checkbox" value="pequeno" className = {styles.filterCheckbox}/>
                                        <span className = {styles.toggleSwitch}></span>
                                        <span className = {styles.labelText}>Pequeno</span>
                                    </label>
                                    <label className = {styles.toggleFilter}>
                                        <input type="checkbox" value="medio" className = {styles.filterCheckbox}/>
                                        <span className = {styles.toggleSwitch}></span>
                                        <span className = {styles.labelText}>Médio</span>
                                    </label>
                                    <label className = {styles.toggleFilter}>
                                        <input type="checkbox" value="grande" className = {styles.filterCheckbox}/>
                                        <span className = {styles.toggleSwitch}></span>
                                        <span className = {styles.labelText}>Grande</span>
                                    </label>
                                </div>
                            </div>
                        </aside>
                        <main className = {styles.animalsSection}>
                            <div className = {styles.animalsGrid} id = "animalsGrid"></div>
                            <div className = {styles.pagination} id = "pagination"></div>
                            <div className = {styles.ctaSection}>
                                <p>Deseja pedir um cadastro para adoção?
                                    <a href="/cadastro" className = {styles.ctaLink}>Clique aqui</a>
                                </p>
                            </div>
                        </main>
                    </div>
                </section>      
            </main>
            <Footer />
        </div>

    )
}