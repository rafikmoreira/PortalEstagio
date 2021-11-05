import glossario from "../data/glossario.json";

import {PopoverBody, UncontrolledPopover} from "reactstrap";
import {useRef} from 'react'
import Link from "next/link";
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
                            <Link href={signifiado.externo.link}>
                                <a rel="noreferrer" ><i className="fas fa-external-link-alt"/> {signifiado.externo.titulo}</a></Link> : <></>

                    }
                </PopoverBody>
            </UncontrolledPopover>
        </>
    )
}

export default Glossario
