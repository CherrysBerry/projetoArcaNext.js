import Header from "@/components/Header";
import Link from "next/dist/client/link";
export default function Consulta() {
    return (
        <div>
            <Header />
            <main>
                <p className="Agendar Consulta"></p>
                <h3>Tipo de Atendimento:</h3>
                <div className="tipoAtendimento">
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
                <label id = "horariosDisponiveis">
                    <p style = {{fontSize: "22px", marginTop: "4px"}}>Data:</p>
                    <input type="date" name = "date" />
                </label>
                <div className="horarios">
                    <div className="linhaHorarios">
                        <span className="textoHorarios">Manhã:</span>
                        <div className="grupoHorarios">
                            <input type="radio" id="7" name = "radioHorario" value = "7:00" />
                            <label htmlFor="7" className="disponivel">07:00</label>
                            <input type="radio" id="8" name = "radioHorario" value = "8:00" />
                            <label htmlFor="8" className="indisponivel">08:00</label>
                            <input type="radio" id="9" name = "radioHorario" value = "9:00" />
                            <label htmlFor="9" className="indisponivel">09:00</label>
                            <input type="radio" id="10" name = "radioHorario" value = "10:00" />
                            <label htmlFor="10" className="indisponivel">10:00</label>
                            <input type="radio" id="11" name = "radioHorario" value = "11:00" />
                            <label htmlFor="11" className="disponivel">11:00</label>
                            <input type="radio" id="12" name = "radioHorario" value = "12:00" />
                            <label htmlFor="12" className="disponivel">12:00</label>
                        </div>
                    </div>
                    <div className="linhaHorarios2">
                        <br />
                        <span className="textoHorarios">Tarde:</span>
                        <div className="grupoHorarios">
                            <input type="radio" id="13" name = "radioHorario" value = "13:00" />
                            <label htmlFor="13" className="disponivel">13:00</label>
                            <input type="radio" id="14" name = "radioHorario" value = "14:00" />
                            <label htmlFor="14" className="disponivel">14:00</label>
                            <input type="radio" id="15" name = "radioHorario" value = "15:00" />
                            <label htmlFor="15" className="disponivel">15:00</label>
                            <input type="radio" id="16" name = "radioHorario" value = "16:00" />
                            <label htmlFor="16" className="disponivel">16:00</label>
                            <input type="radio" id="17" name = "radioHorario" value = "17:00" />
                            <label htmlFor="17" className="disponivel">17:00</label>
                            <input type="radio" id="18" name = "radioHorario" value = "18:00" />
                            <label htmlFor="18" className="disponivel">18:00</label>
                        </div>
                    </div>
                    <h3>Dados do animal:</h3>
                    <div className="dados animal">
                        <br />
                        <span>Espécie:</span>
                        <select name="especie" id="especieSelect">
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
                            <input type="text" name = ""/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}