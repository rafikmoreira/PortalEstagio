import styles from './NavMenu.module.scss'
import { useRouter } from "next/router";
import {
    Collapse,
    DropdownItem, DropdownMenu, DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler,
    NavItem,
    NavLink, UncontrolledDropdown
} from "reactstrap";
import Link from "next/link";
import {useState} from "react";

const NavMenu = () => {
    const router = useRouter();

    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <Navbar dark expand="md" light container fixed="top" className={styles.mainMenu}>
            <NavbarBrand>
                <img src="images/logo.svg" alt="Logo IFNMG"/>
            </NavbarBrand>
            <NavbarToggler  onClick={toggle}/>
            <Collapse navbar isOpen={open}>
                <Nav className={"me-auto"} navbar>
                    <NavItem  onClick={toggle}>
                        <Link href={"/"} >
                            <NavLink href={""} active={router.pathname === "/"}>Principal</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem  onClick={toggle}>
                        <Link href={"/passo-a-passo"} >
                            <NavLink href={""} active={router.pathname=== "/passo-a-passo"}>Passo a Passo</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem  onClick={toggle}>
                        <Link href={"/documentos"}>
                            <NavLink href={""} active={router.pathname=== "/documentos"}>Documentos</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem  onClick={toggle}>
                        <Link href={"/convenios"} >
                            <NavLink href={""} active={router.pathname=== "/convenios"}>Convênios</NavLink>
                        </Link>
                    </NavItem>
                    <UncontrolledDropdown inNavbar nav>
                        <DropdownToggle caret nav>
                            Mais
                        </DropdownToggle>
                        <DropdownMenu dark>
                            <DropdownItem  onClick={toggle}>
                                <Link href={"/aproveitamento-profissional"}>Aproveitamento Profissional</Link>
                            </DropdownItem>
                            <DropdownItem  onClick={toggle}>
                                <Link href={"/cursos"}>Cursos</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
            {/*<NavbarText>*/}
            {/*<NavLink href={"/login"}>Entrar</NavLink>*/}
            {/*</NavbarText>*/}
        </Navbar>
    )
}

export default NavMenu
