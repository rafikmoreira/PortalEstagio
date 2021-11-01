import glossario from "../data/glossario.json";

import {PopoverBody, UncontrolledPopover} from "reactstrap";
import {useRef} from 'react'
const Glossario = ({children}) => {

    const signifiado = glossario[children];
    const ref = useRef(null);

    return (
        <>
        <span className={"text-info user-select-none"} ref={ref}>{children}</span>
            <UncontrolledPopover
                placement="top"
                target={ref}
                trigger={"hover"} >
                <PopoverBody>
                    <div dangerouslySetInnerHTML={ {__html: signifiado?.descricao || children} } />
                    {
                        signifiado?.externo ?
                            <a target={"_blank"}  rel="noreferrer" href={signifiado.externo.link}><i className="fas fa-external-link-alt"></i> {signifiado.externo.titulo}</a> : <></>
                    }
                </PopoverBody>
            </UncontrolledPopover>
        </>
    )
}

export default Glossario
