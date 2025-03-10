import React from 'react';
import classNames from 'classnames';
import styles from './FilterColor.module.scss';

interface IFilterColorProps {
    color: string,
    isSelected: boolean,
    onClick: () => void
}

const FilterColor: React.FC<IFilterColorProps> = ({ color, isSelected, onClick }) => {
    return (
        <>
            <div onClick={onClick} className={classNames(styles.block, { [styles.selected]: isSelected })}>
                <div className={styles.color} style={{ backgroundColor: color }}></div>
            </div>
        </>
    );
};

export default FilterColor;