import './styles.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar() {
    return <nav className="buttons-container">

        <CustomLink className="button-36" to="/">Home</CustomLink>
        <CustomLink className="button-36" to="/csv">CSV</CustomLink>
        <CustomLink className="button-36" to="/duplicates">Duplicates</CustomLink>
        <CustomLink className="button-36" to="/map">Map</CustomLink>
        <CustomLink className="button-36" to="/plots">Plot</CustomLink>
        <CustomLink className="button-36" to="/about">About</CustomLink>
    </nav>

}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li style={{ listStyleType: "none" }} className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}