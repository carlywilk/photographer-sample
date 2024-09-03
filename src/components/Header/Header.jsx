import { Link } from "react-router-dom";

import "./Header.scss";

export function Header() {
    return (
        <div className="header">
            {/* <div className="header__title">
                <div className="header__name">
                    <h1 className="header__first-name">Ella</h1>
                    <h1 className="header__last-name">Parker</h1>
                </div>
                <h1 className="header__job">Photography</h1>
            </div> */}
            <h1 className="header__title">Ella Parker Photography</h1>
            <nav className="header__nav">
                <Link className="header__link" to="/">
                    <h2 className="header__button">Home</h2>
                </Link>
                <Link className="header__link" to="/about">
                    <h2 className="header__button">About</h2>
                </Link>
                <Link className="header__link" to="/series">
                    <h2 className="header__button">Series</h2>
                </Link>
                <Link className="header__link" to="/contact">
                    <h2 className="header__button">Contact</h2>
                </Link>
            </nav>
        </div>
    )
}