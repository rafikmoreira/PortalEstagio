import styles from './Hero.module.scss'

const Hero = () => (
    <div className={styles.hero}>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col">
                            <span className={styles.title}>Lorem ipsum dolor sit amet</span><br/>
                            <span className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla.</span>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <button href="#" className={styles.btnIniciarEstaio}>Iniciar Estágio</button>
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
