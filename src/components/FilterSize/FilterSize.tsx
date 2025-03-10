import React from 'react';
import styles from './FilterSize.module.scss'
import classNames from 'classnames';

interface IFilterSizesProps {
    size: string,
    isSelected: boolean,
    onClick: () => void
}

const FilterSizes: React.FC<IFilterSizesProps> = ({ size, isSelected, onClick }) => {

    return (
        <>
            <div onClick={onClick} className={classNames(styles.size, { [styles.selected]: isSelected })}>
                <span>
                    {size}
                </span>
            </div>
        </>
    );
};

export default FilterSizes;