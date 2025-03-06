import React from 'react';
import "./intro.scss";
import introImg from '../../assets/slider-img.jpg';
import introBg from '../../assets/intro-bg.jpg';


interface IIntroProps { }

const Intro: React.FC<IIntroProps> = () => {
    return (
        <>
            <div className="intro">
                <div className="intro__container">
                    <div className="intro__inner">
                        <div className="intro__info">
                            <div className="intro__title">
                                SUMMER SALE GEt <span>30% OFF</span> On all dress.
                            </div>
                            <button type='button' className="intro__btn btn btn--grey">
                                shop now
                            </button>
                        </div>
                        <div className="intro__img">
                            <img src={introImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intro;