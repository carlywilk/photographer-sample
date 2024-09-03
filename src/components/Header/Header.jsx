import { Link } from "react-router-dom";

import "./Header.scss";

export function Header() {
    return (
        <div>
        <h1 class="header__name">Ella Parker</h1>
        <nav>
            <Link className="header__link" to="/">
                <h2 class="header__button">Home</h2>
            </Link>
            <Link className="header__link" to="/about">
                <h2 class="header__button">About</h2>
            </Link>
            <Link className="header__link" to="/series">
                <h2 class="header__button">Series</h2>
            </Link>
            <Link className="header__link" to="/contact">
                <h2 class="header__button">Contact</h2>
            </Link>
        </nav>
        </div>
    )
}