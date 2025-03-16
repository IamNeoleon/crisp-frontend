import React from 'react';
import PromoBanner from '../components/PromoBanner/PromoBanner';
import Filters from '../components/Filters/Filters';
import CatalogOrder from '../components/CatalogOrder/CatalogOrder';
import Card from '../components/Card/Card';

interface IShopProps { }

const Shop: React.FC<IShopProps> = (props) => {
    return (
        <>
            <div className="shop">
                <PromoBanner />
                <div className="container">
                    <div className="shop__catalog">
                        <div className="sidebar">
                            <Filters />
                        </div>
                        <div className="catalog">
                            <div className="catalog__top">
                                <CatalogOrder />
                            </div>
                            <div className="catalog__products">
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;