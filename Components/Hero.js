import styles from './Hero.module.scss'
import Link from "next/link";

const Hero = () => (
    <div className={styles.hero}>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col">
                            <span className={styles.title}>Portal do estagiário - IFNGM - Almenara</span><br/>
                            <span className={styles.subtitle}>
                                Navegue pelo nosso site, tire suas dúvidas e compreenda o processo para realização do seu estágio.
                            </span>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <Link href={"/passo-a-passo"}><a  className={`btn-light btnCustomizado`}>Iniciar Estágio</a></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src="images/video.png"/>
                </div>
            </div>
        </div>
    </div>
)

export default Hero
