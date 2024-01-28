import { Link } from "./Link.jsx"

export function Menu({links}){
    return <div className="menu__container">
    {links && links.map(link => {
        return <Link key={link.name}  name={link.name} link={link.link}/>
    })}
    </div>
}