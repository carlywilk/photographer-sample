
import { NavBox } from "../../components/NavBox/NavBox";

import exampleImage from "../../assets/images/test-image.jpeg";

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
                    <p>2</p>
                </div>
                <div className="landing__box">
                    <p>3</p>
                </div>
            </div>

            <div className="landing__row--lower">
                <div className="landing__box">
                    <p>4</p>
                </div>
                <div className="landing__box">
                    <p>5</p>
                </div>
                <div className="landing__box">
                    <p>6</p>
                </div>
            </div>
        </div>
    )
}