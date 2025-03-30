import React from 'react';
import PromoBanner from '../components/PromoBanner/PromoBanner';
import Filters from '../components/Filters/Filters';
import CatalogOrder from '../components/CatalogOrder/CatalogOrder';
import Card from '../components/Card/Card';
import { useGetProductsQuery } from '../store/api/productsApi';


const Shop: React.FC = () => {
    const { data: products, isLoading, error } = useGetProductsQuery()

    console.log(products);
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
                                {products?.map(product => <Card key={product.id} product={product} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;