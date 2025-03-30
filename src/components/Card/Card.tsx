import React from 'react';
import styles from './Card.module.scss';
import { IProduct } from '../../@types';

interface ICardProps {
    product: IProduct,
}

const Card: React.FC<ICardProps> = ({ product }) => {
    const avialableColors: string[] = [];
    const productVariant = product.variants[0];

    product.variants.forEach(item => {
        avialableColors.push(item.colorCode)
    })

    return (
        <>
            <div className={styles.card}>
                <div className={styles.img}>
                    <img src={productVariant.images[0].url} alt="cardImg" />
                </div>
                <div className={styles.info}>
                    <div className={styles.title}>{product.name}</div>
                    <div className={styles.price}>{productVariant.price} EUR</div>
                    <div className={styles.colors}>
                        {avialableColors.map(color => (
                            <div className={styles.block}>
                                <div className={styles.color} style={{ backgroundColor: color }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
};

export default Card;