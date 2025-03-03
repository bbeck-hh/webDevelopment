import Link from "./Link";
export default function Navigation() {
    return (
        <nav>
            <Link className="navigation__link" href="#home">Home</Link>
            <Link className="navigation__link" href="#about">About</Link>
            <Link className="navigation__link" href="#impressum">Impressum</Link>
        </nav>
    );
}