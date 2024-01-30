import "/src/style/link.css"
import { useHover } from "@uidotdev/usehooks";


export function NavLink({keys, name, link}){

    const [ref, hovering] = useHover();
    const backgroundColor = hovering
    ? `var(--secondary-color)`
    : "var(--third-color)";
    const width = hovering ? `100px` : "65px";
    const hidden = hovering ? false : true;

    return <div className="link__container" key={keys} ref={ref}>
        <div className="link__name" hidden={hidden}><a href={link} >{name}</a></div>
        <div className="link__bar" style={{backgroundColor,width}} ref={ref}></div>
    </div>
}