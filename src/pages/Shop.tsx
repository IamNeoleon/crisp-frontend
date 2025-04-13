import React from 'react';
import PromoBanner from '../components/PromoBanner/PromoBanner';
import Filters from '../components/Filters/Filters';
import CatalogOrder from '../components/CatalogOrder/CatalogOrder';
import Card from '../components/Card/Card';
import AppliedFilters from '../components/AppliedFilters/AppliedFilters';
import { useGetProductsQuery } from '../store/api/productsApi';
import { useAppSelector } from '../hooks';
import { selectAppliedsFilters, selectDraftFilters } from '../store/slices/filtersSlice';


const Shop: React.FC = () => {
    const { brands, size, dressLengths, color, price } = useAppSelector(selectAppliedsFilters)
    const sort = "";

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
                            <AppliedFilters />
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