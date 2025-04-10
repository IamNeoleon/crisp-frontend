import React from 'react';
import PromoBanner from '../components/PromoBanner/PromoBanner';
import Filters from '../components/Filters/Filters';
import CatalogOrder from '../components/CatalogOrder/CatalogOrder';
import Card from '../components/Card/Card';
import { useGetProductsQuery } from '../store/api/productsApi';
import { useAppSelector } from '../hooks';
import { selectFilters } from '../store/slices/filtersSlice';


const Shop: React.FC = () => {
    const { size, brands, color, dressLengths, sort, price } = useAppSelector(selectFilters);
    const { data: products, isLoading, error } = useGetProductsQuery({
        brands: brands,
        dressLengths: dressLengths,
        color: color,
        size: size,
        sort: sort,
        price: price
    })

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