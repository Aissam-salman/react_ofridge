import { NavLink } from "./NavLink.jsx"

export function Menu({links}){
    return <div className="menu__container">
    {links && links.map(link => {
        return <NavLink key={link.name}  name={link.name} link={link.link}/>
    })}
    </div>
}