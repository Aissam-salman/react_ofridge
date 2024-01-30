import "/src/style/header.css"
import { Logo } from "../Logo.jsx"
import { Menu } from "./Menu.jsx"

export function Header(){

    const LINKS = [
        {
            name: "S'INSCRIRE",
            link: "/register"
        },
        {
            name: "CONNEXION",
            link: "/login"
        },
        {
            name: "RECHERCHE",
            link: "/search"
        },
        {
            name: "PRODUIT",
            link: "/product"
        },
        {
            name: "COMPTE",
            link: "/account"
        },
        {
            name: "HOME",
            link: "/"
        }
    ]

    return <header className="header__container">
        <Logo name="O'fridge" />
        <Menu  links={LINKS}/>
    </header>
}