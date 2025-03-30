import React, { useState } from 'react';
import './CatalogOrder.scss';
import { ChevronDown } from 'lucide-react';
import classNames from 'classnames';

interface ICatalogOrderProps { }

const variants = ['price (High to low)', 'price (Low to high)', 'Most popular']

const CatalogOrder: React.FC<ICatalogOrderProps> = () => {
    const [order, setOrder] = useState<string>(variants[0])
    const [open, setOpen] = useState<boolean>(false);

    const handleSelectOrder = (order: string) => {
        setOrder(order)
        setOpen(false)
    }
    return (
        <>
            <div className={classNames("catalogOrder", { 'active': open })}>
                <div onClick={() => setOpen(prev => !prev)} className="catalogOrder__selected">
                    <span>{order}</span>
                    <ChevronDown />
                </div>
                <div className="catalogOrder__list">
                    {variants.filter(variant => variant != order).map((variant, index) => (
                        <div key={index} onClick={() => handleSelectOrder(variant)} className="catalogOrder__variant">
                            {variant}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CatalogOrder;