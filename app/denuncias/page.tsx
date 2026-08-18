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
                        <hr id = "divider" />
                        <div className = {styles.fieldRow} style = {{alignItems: "flex-start", gap: "20px"}}>
                            <div className = {styles.fieldGroup} style = {{flex: "1", minWidth: "220px"}}>
                                <label>Descrição:</label>
                                <textarea id = "descricao" placeholder = "Descrição..." style = {{width: "100%", height: "130px"}}></textarea> 
                            </div>
                            <div style = {{display: "flex", flexDirection: "column", gap: "14px", flex: "1", minWidth: "220px", justifyContent: "flex-end", alignSelf: "flex-end"}}>
                                <div className = {styles.confirmacaoBox} id = "confirmacaoBox">
                                    <p>Você tem certeza?</p>
                                    <div className = {styles.confirmacaoBotoes}>
                                        <button className = {styles.btnVermelho} onClick = {() => cancelarEnvio()}>Não</button>
                                        <button id = "Verde" onClick = {() => confirmarEnvio()}>Sim</button>
                                    </div>
                                </div>
                                <div className = {styles.enviarRow}>
                                    <button id = "Verde" onClick = {() => mostrarConfirmacao()}>Enviar</button>
                                </div> 
                            </div>
                        </div>
                        <div className = {styles.uploadRow}>
                            <label className = {styles.uploadLabel} htmlFor = "imagemDenuncia">Anexe uma imagem</label>
                            <input type = "file" id = "imagemDenuncia" accept = "image/*" />
                            <span className = {styles.fileIcon} title = "Anexar Imagem">
                                <img src="../imgs/File.png" alt="anexar imagem" width="26" height="26"></img>
                            </span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <script>
                function mostrarConfirmacao() {
                    const box = document.getElementById('confirmacaoBox');
                    box.classList.add('visible');
                    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }      
                function cancelarEnvio() {
                    document.getElementById('confirmacaoBox').classList.remove('visible');
                }

                function confirmarEnvio() {
                    document.getElementById('confirmacaoBox').classList.remove('visible')
                    const codigo = '#' + Math.floor(1000 + Math.random() * 9000);
                    document.getElementById('codigoRequisito').textContent = 'Código de requisito: ' + codigo;
                    const popup = document.getElementById('popupSucesso');
                    popup.classList.add('visible');
                    setTimeout(() => {
                    popup.classList.remove('visible');
                    }, 6000);
                }
            </script>
        </body>
        
    )
}