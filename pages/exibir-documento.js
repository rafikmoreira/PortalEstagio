import styles from './exibir-documento.module.scss'
import { useRouter } from "next/router";
import {useEffect, useState} from "react";

const ExibirDocumento = () => {
    const router = useRouter();
    const [domain, setDomain] = useState(null)

    useEffect(() => {
        setDomain(window.location.hostname+ (window.location.port?":" +window.location.port:""))
    },[])


    return <section>
        {domain ?
            <embed
                className={styles.documento}
                src={`https://drive.google.com/viewerng/viewer?embedded=true&url=https://${domain}/documentos/${router.query.doc}`}
                width="500" height="375"
            /> : <></>
        }
    </section>
}

export default ExibirDocumento
