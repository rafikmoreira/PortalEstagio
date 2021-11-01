function Documento({titulo,descricao, pdf, doc, semImagem=false}){
    return <div className="row mb-3">
            <div className="col-12 d-flex">
                { !semImagem ?
                    <div className="d-none d-sm-block col-2 col-lg-1">
                        <img className="img-fluid" src="images/doc.svg"/>
                    </div> : <></>
                }

                <div className="col d-flex flex-column m-md-2 m-sm-1">
                    <h4>{titulo}</h4>
                    <p className={"flex-grow-1"}>
                        {descricao}
                    </p>
                    <div>
                        <span className="m-2">
                            <a href="" className={"text-nowrap"}>
                                <i className={"fas fa-download"}></i> Download
                            </a>
                        </span>
                        <span className="m-2">
                            <a href="" className={"text-nowrap"}>
                                <i className={"fas fa-print"}></i> Imprimir
                            </a>
                        </span>
                        <span className="m-2">
                            <a href="" className={"text-nowrap"}>
                                <i className={"fas fa-edit"}></i> Preencher Online
                            </a>
                        </span>
                    </div>
                </div>
            </div>
    </div>
}


export default Documento
