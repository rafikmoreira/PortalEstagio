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
            <NavbarToggler onClick={toggle}/>
            <Collapse navbar isOpen={open}>
                <Nav className={"me-auto"} navbar>
                    <NavItem>
                        <NavLink href={"/"} active={router.pathname === "/"}>Principal</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={"/passo-a-passo"} active={router.pathname=== "/passo-a-passo"}>Passo a Passo</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={"/documentos"} active={router.pathname=== "/documentos"}>Documentos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={"/convenios"} active={router.pathname=== "/convenios"}>Convênios</NavLink>
                    </NavItem>
                    <UncontrolledDropdown inNavbar nav>
                        <DropdownToggle caret nav>
                            Mais
                        </DropdownToggle>
                        <DropdownMenu dark>
                            <DropdownItem>
                                <Link href={"/aproveitamento-profissional"}>Aproveitamento Profissional</Link>
                            </DropdownItem>
                            <DropdownItem>
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
