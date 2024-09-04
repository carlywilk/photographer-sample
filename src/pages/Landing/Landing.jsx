
import { NavBox } from "../../components/NavBox/NavBox";

import exampleImage from "../../assets/images/test-image.jpeg";
import architectureImage from "../../assets/images/architecture.jpg";
import concertsImage from "../../assets/images/concerts.jpg";
import ediblesImage from "../../assets/images/edibles.jpg";
import natureImage from "../../assets/images/nature.jpg";
import portraitsImage from "../../assets/images/portraits.jpg";

import "./Landing.scss";

export function Landing() {
    return (
        <div className="landing">
            {/* <h3 className="landing__title">Landing Page</h3> */}
            {/* <img className="landing__image" src={exampleImage} alt=""/> */}

            <div className="landing__row--upper">
                <div className="landing__box">
                    {/* <p>1</p> */}
                    <NavBox />
                </div>
                <div className="landing__box">
                    {/* <p>2</p> */}
                    <img className="landing__image" src={portraitsImage} alt=""/>
                </div>
                <div className="landing__box">
                    {/* <p>3</p> */}
                    <img className="landing__image--resized" src={natureImage} alt=""/>
                </div>
            </div>

            <div className="landing__row--lower">
                <div className="landing__box">
                    {/* <p>4</p> */}
                    <img className="landing__image--resized" src={concertsImage} alt=""/>
                </div>
                <div className="landing__box">
                    {/* <p>5</p> */}
                    <img className="landing__image--resized" src={ediblesImage} alt=""/>
                </div>
                <div className="landing__box">
                    {/* <p>6</p> */}
                    <img className="landing__image" src={architectureImage} alt=""/>
                </div>
            </div>
        </div>
    )
}