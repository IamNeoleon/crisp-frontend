import React from 'react';
import "./promoBanner.scss";

interface IPromoBannerProps { }

const PromoBanner: React.FC<IPromoBannerProps> = () => {
    return (
        <>
            <div className="promoBanner">
                <div className="container">
                    <div className="promoBanner__info">
                        <div className="promoBanner__title">shoping without limits.</div>
                        <div className="promoBanner__text">
                            You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!
                        </div>
                        <button className="promoBanner__btn btn">shop now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PromoBanner;