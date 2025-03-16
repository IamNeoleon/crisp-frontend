import React, { useState } from 'react';
import 'rc-slider/assets/index.css';
import './FilterPrice.scss';
import Slider from 'rc-slider'; // Импортируем только Slider

interface IFilterPriceProps {
    priceRange: [number, number],
    onChangePrice: (value: number | number[]) => void;
}

const FilterPrice: React.FC<IFilterPriceProps> = ({ priceRange, onChangePrice }) => {

    return (
        <div className="filterPrice">
            <div className="filterPrice__range">
                <span>{priceRange[0].toFixed(2)} EUR</span>
                <span>{priceRange[1].toFixed(2)} EUR</span>
            </div>
            <Slider
                range
                min={0}
                max={250}
                value={priceRange}
                onChange={onChangePrice}
                styles={{
                    track: { backgroundColor: 'black', height: 4 },  // Залитая часть
                    rail: { backgroundColor: '#ccc', height: 4 },    // Незаполненная часть
                    handle: {
                        backgroundColor: 'black',
                        borderColor: 'black',
                        width: 6,
                        height: 20,
                        top: 2,
                        boxShadow: 'none', // Убираем подсветку
                        borderRadius: 0
                    },
                }}
            />
        </div>
    );
};

export default FilterPrice;
