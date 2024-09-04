
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
                </div>
                <div className="landing__box">
                    <img className="landing__image--resized" src={natureImage} alt=""/>
                </div>
            </div>
            <div className="landing__row--lower">
                <div className="landing__box">
                    <img className="landing__image--resized" src={concertsImage} alt=""/>
                </div>
                <div className="landing__box">
                    <img className="landing__image--resized" src={ediblesImage} alt=""/>
                </div>
                <div className="landing__box">
                    <img className="landing__image" src={architectureImage} alt=""/>
                </div>
            </div>
        </div>
    )
}