import React from 'react';
import PromoBanner from '../components/PromoBanner/PromoBanner';
import Sidebar from '../components/Sidebar/Sidebar';

interface IShopProps { }

const Shop: React.FC<IShopProps> = (props) => {
    return (
        <>
            <div className="shop">
                <PromoBanner />
                <div className="container">
                    <div className="shop__catalog">
                        <Sidebar />
                        <div className="catalog"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;