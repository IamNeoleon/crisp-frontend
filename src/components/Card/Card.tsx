import React from 'react';
import styles from './Card.module.scss';
import cardImg from '../../assets/card-img.jpg';

interface ICardProps { }

const Card: React.FC<ICardProps> = () => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.img}>
                    <img src={cardImg} alt="cardImg" />
                </div>
                <div className={styles.info}>
                    <div className={styles.title}>Angels malu zip jeans slim black used</div>
                    <div className={styles.price}>139,00 EUR</div>
                    <div className={styles.colors}>
                        <div className={styles.color} style={{ backgroundColor: '#24426A' }}></div>
                        <div className={styles.color} style={{ backgroundColor: '#18574A' }}></div>
                        <div className={styles.color} style={{ backgroundColor: '#666689' }}></div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Card;