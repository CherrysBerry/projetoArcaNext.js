import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./denuncias.module.css";
export default function Denuncias() {
    return (
        <body>
            <Header />
            <div className = {styles.popupSucesso} id = "popupSucesso">
                <p>Denúncia enviada com sucesso!</p>
                <p id = "codigoRequisito" style = {{marginTop: "6px", fontSize: "16px"}}></p>
            </div>
            <main>
                <div className = {styles.wrapper}>
                    <div className = {styles.tituloPaginaExt}>Denúncias</div>
                    <div className = {styles.meio}>
                        <div className = {styles.fieldRow}>
                            <div className = {styles.fieldGroup}>
                                <label>Tipo de denúncia:</label>
                                <select style = {{width: "200px"}} id = "tipoDenuncia">
                                    <option value="">Selecione...</option>
                                    <option value="1">Animal abandonado ou ferido</option>
                                    <option value="2">Maus-tratos</option>
                                </select>
                            </div>
                        </div>
                        <hr id = "divider" />
                        <div className = {styles.subLabel}>Endereço</div>
                        <div className = {styles.fieldRow}>
                            <div className = {styles.fieldGroup}>
                                <label>Bairro:</label>
                                <select id = "bairroSelect">
                                    <option value="">Selecione...</option>
                                    <option value="1">Laranjeiras</option>
                                    <option value="2">Manguinhos</option>
                                    <option value="3">Jacaraípe</option>
                                </select>
                            </div>
                            <div className = {styles.fieldGroup}>
                                <label>Logradouro</label>
                                <input type = "text" id = "logradouro" placeholder = "Ex.: Avenida Carlos Lindenberg" style={{width: "200px"}}></input>
                            </div>
                            <div className = {styles.fieldGroup}>
                                <label>Número:</label>
                                <input type = "number" id = "numero" placeholder = "Ex.: 90" inputMode = "numeric" style = {{width: "900px"}}></input>
                            </div>
                            <div className = {styles.fieldGroup}>
                                <label>Complemento:</label>
                                <input type = "text" id = "complemento" placeholder = "Ex.: Ao lado do Perim" style = {{width: "180px"}}></input>
                            </div>
                        </div>      
                    </div>
                </div>
            </main>
        </body>
        
    )
}