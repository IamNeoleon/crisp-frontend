import React from 'react';
import Slider from '../Slider/Slider';

interface IIntroProps { }

const Intro: React.FC<IIntroProps> = () => {
    return (
        <>
            <div className="intro">
                <div className="intro__container">
                    <div className="intro__slider">
                        <Slider />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intro;