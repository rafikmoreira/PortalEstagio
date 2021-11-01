import styles from "../Components/Hero.module.scss";

const Convenios = () => (
    <section className="container">
        <div className="row">
            <div className="col">
                <h1 className="mt-3">Instituições Parceiras</h1>
                <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis elit, cursus in diam sed, sollicitudin consequat felis. Phasellus eget augue suscipit, placerat augue eget, tempor nunc. Mauris a sem quis velit posuere aliquet. Morbi vitae congue odio, a ultrices orci. Vivamus a est eu ex pharetra efficitur. Aliquam erat volutpat. Nullam a pulvinar ex, id posuere elit. Duis sed leo maximus, facilisis turpis eu, aliquam metus. Nullam tempor turpis quis imperdiet viverra. Nunc tempus accumsan mi vitae dictum.
                </p>
            </div>
            <div className="col-4 col-lg-3">
                <div className="row">
                    <div className="col-12">
                        <img className="img-fluid" src="images/convenios.svg"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <a href="/" className={`btn-light btnCustomizado`}>Seja um parceiro</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Convenios
