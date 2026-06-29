import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./agendar.module.css";
export default function Consulta() {
    return (
        <div>
            <Header />
            <main>
                <p className="Agendar Consulta"></p>
                <h3>Tipo de Atendimento:</h3>
                <div className={styles.tipoAtendimento}>
                    <input type="radio" name = "tipoAtendimentoRadios" id = "tipoConsulta" value ="consultaGeral"/>
                    <label htmlFor="tipoConsulta">Consulta Geral</label>
                    <input type="radio" name = "tipoAtendimentoRadios" id = "tipoVacinacao" value ="vacinacao"/>
                    <label htmlFor="tipoVacinacao">Vacinação</label>
                    <input type="radio" name = "tipoAtendimentoRadios" id = "tipoCastracao" value ="castracao"/>
                    <label htmlFor="tipoCastracao">Castração</label>
                    <input type="radio" name = "tipoAtendimentoRadios" id = "tipoMicrochipagem" value ="microchipagem"/>
                    <label htmlFor="tipoMicrochipagem">Microchipagem</label>
                </div>
                <h3 style = {{justifySelf: "center"}}>Horários Disponíveis</h3>
                <label id = {styles.horariosDisponiveis}>
                    <p style = {{fontSize: "22px", marginTop: "4px"}}>Data:</p>
                    <input type="date" name = "date" />
                </label>
                <div className={styles.horarios}>
                    <div className={styles.linhaHorarios}>
                        <span className={styles.textoHorarios}>Manhã:</span>
                        <div className={styles.grupoHorarios}>
                            <input type="radio" id="7" name = "radioHorario" value = "7:00" />
                            <label htmlFor="7" className={styles.disponivel}>07:00</label>
                            <input type="radio" id="8" name = "radioHorario" value = "8:00" />
                            <label htmlFor="8" className={styles.indisponivel}>08:00</label>
                            <input type="radio" id="9" name = "radioHorario" value = "9:00" />
                            <label htmlFor="9" className={styles.indisponivel}>09:00</label>
                            <input type="radio" id="10" name = "radioHorario" value = "10:00" />
                            <label htmlFor="10" className={styles.indisponivel}>10:00</label>
                            <input type="radio" id="11" name = "radioHorario" value = "11:00" />
                            <label htmlFor="11" className={styles.disponivel}>11:00</label>
                            <input type="radio" id="12" name = "radioHorario" value = "12:00" />
                            <label htmlFor="12" className={styles.disponivel}>12:00</label>
                        </div>
                    </div>
                    <div className={styles.linhaHorarios2}>
                        <br />
                        <span className={styles.textoHorarios}>Tarde:</span>
                        <div className={styles.grupoHorarios}>
                            <input type="radio" id="13" name = "radioHorario" value = "13:00" />
                            <label htmlFor="13" className={styles.disponivel}>13:00</label>
                            <input type="radio" id="14" name = "radioHorario" value = "14:00" />
                            <label htmlFor="14" className={styles.disponivel}>14:00</label>
                            <input type="radio" id="15" name = "radioHorario" value = "15:00" />
                            <label htmlFor="15" className={styles.disponivel}>15:00</label>
                            <input type="radio" id="16" name = "radioHorario" value = "16:00" />
                            <label htmlFor="16" className={styles.disponivel}>16:00</label>
                            <input type="radio" id="17" name = "radioHorario" value = "17:00" />
                            <label htmlFor="17" className={styles.disponivel}>17:00</label>
                            <input type="radio" id="18" name = "radioHorario" value = "18:00" />
                            <label htmlFor="18" className={styles.disponivel}>18:00</label>
                        </div>
                    </div>
                    <h3>Dados do animal:</h3>
                    <div className="dados animal">
                        <br />
                        <span>Espécie:</span>
                        <select name="especie" id={styles.especieSelect}>
                            <option value="cachorro">Cachorro</option>
                            <option value="gato">Gato</option>
                        </select>
                        <span>Idade:</span>
                        <label htmlFor="idadeText">
                            <input type="text" placeholder="Ex: 20" />
                            <br />
                        </label>
                        <br />
                        <div className="nomeAnimal">
                            <span>Nome do Animal:</span>
                            <input type="text" name = "nomeAnimal" placeholder="Ex: Luna"/>
                            <label htmlFor="nomeAnimal"></label>
                        </div>
                        <br />
                        <div className={styles.observacoesLabel2}>
                            <p>Observações</p>
                            <label htmlFor="observacoesLabel">
                                <textarea name="observacoesText" id="observacoesTextid" placeholder="Escreva aqui o texto"></textarea>
                            </label>
                        </div>

                    </div>
                    <br />
                    <div className={styles.dadosTutor}>
                        <h3>Dados do tutor</h3>
                        <div className={styles.nomeETelefone}>
                            <div className={styles.campo}>
                                <span>Nome do tutor:</span>
                                <input type="text" name="nomeTutorTextin" id="nomeTutorTextid" placeholder="Ex: Alberto Silva" />
                            </div>
                            <div className={styles.campo}>
                                <span>Telefone:</span>
                                <input type="tel" name="telefoneTutor" placeholder="Ex: 99999-9999" />
                            </div>
                        </div>
                        <div className="emailLabel">
                            <span>Email:</span>
                            <input type="email" placeholder="Ex: xxxx@gmail.com"/>
                        </div>
                    </div>
                    <br />
                    <div className={styles.termoDeEsclarecimento}>
                        <p style={{fontSize: "17px"}}>Termo de Esclarecimento</p>
                    </div>
                    <br />
                    <div className={styles.botaoVerde}>
                        <button type="submit" id = {styles.Verde}>Enviar solicitação para atendimento.</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}