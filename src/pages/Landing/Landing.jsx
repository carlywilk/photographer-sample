
import { NavBox } from "../../components/NavBox/NavBox";

import architectureImage from "../../assets/images/architecture.jpg";
import concertsImage from "../../assets/images/concerts.jpg";
import ediblesImage from "../../assets/images/edibles.jpg";
import natureImage from "../../assets/images/nature.jpg";
import portraitsImage from "../../assets/images/portraits.jpg";

import "./Landing.scss";

export function Landing() {
    return (
        <div className="landing">
            <div className="landing__row--upper">
                <div className="landing__box">
                    <NavBox />
                </div>
                <div className="landing__box">
                    <img className="landing__image" src={portraitsImage} alt=""/>
                    <h2 className="landing__series-title">Portraits</h2>
                </div>
                <div className="landing__box">
                    <img className="landing__image" src={natureImage} alt=""/>
                    <h2 className="landing__series-title">Nature</h2>
                </div>
            </div>
            <div className="landing__row--lower">
                <div className="landing__box">
                    <img className="landing__image" src={concertsImage} alt=""/>
                    <h2 className="landing__series-title">Concerts</h2>
                </div>
                <div className="landing__box">
                    <img className="landing__image" src={ediblesImage} alt=""/>
                    <h2 className="landing__series-title">Edibles</h2>
                </div>
                <div className="landing__box">
                    <img className="landing__image" src={architectureImage} alt=""/>
                    <h2 className="landing__series-title">Architecture</h2>
                </div>
            </div>
        </div>
    )
}