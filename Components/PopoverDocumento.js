import Documento from "./Documento";
import documentos from "../data/documentos.json";
import {PopoverBody, UncontrolledPopover} from "reactstrap";

const PopoverDocumento = ({chaveDocumento, children}) => {

    const documento = Object.keys(documentos).reduce((prev, current) => {
        return prev.concat(documentos[current].documentos)
    },[]).filter(doc => doc.key === chaveDocumento)[0];

    return (
        <span className={"text-danger user-select-none"} id={chaveDocumento}>{children}
            <UncontrolledPopover
                placement="top"
                flip
                target={chaveDocumento}
                trigger={"hover"} >
                <PopoverBody>
                    <Documento {...documento} semImagem/>
                </PopoverBody>
            </UncontrolledPopover>
        </span>
    )
}

export default PopoverDocumento
