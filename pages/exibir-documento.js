import styles from './exibir-documento.module.scss'

const ExibirDocumento = () => {
    return <section>
        <iframe
            className={styles.documento}
            frameBorder={0}
            src="https://drive.google.com/file/d/13eOQGDUOwLtbcI-W8olp5wmF53wO041H/preview"
            width="100%"
            allow="autoplay">
        </iframe>
        {/*<embed src="https://drive.google.com/viewerng/viewer?embedded=true&url=http://localhost:3000/documentos/regulamento_de_estágio.pdf" width="500" height="375"/>*/}

        {/*<embed src="https://drive.google.com/viewerng/viewer?embedded=true&url=documentos/regulamento_de_estágio.pdf" width="100%" style={{"height":"100vh"}}/>*/}
    </section>
}

export default ExibirDocumento
