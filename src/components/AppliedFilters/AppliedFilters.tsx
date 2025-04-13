import React from 'react';
import styles from './appliedFilters.module.scss';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetFilters, selectDraftFilters, setDraftBrands, setDraftColor, setDraftDressLengths, setDraftSize } from '../../store/slices/filtersSlice';

const AppliedFilters: React.FC = () => {
    const dispatch = useAppDispatch();
    const { brands, size, color, dressLengths, price } = useAppSelector(selectDraftFilters)

    const isFiltersEmpty = () => {
        return (
            brands.length === 0 &&
            !size &&
            !color.colorName &&
            dressLengths.length === 0 &&
            (!price || (price.from === 0 && price.to === 0))
        );
    };

    return (
        <AnimatePresence>
            {!isFiltersEmpty() && (
                <motion.div
                    className={styles.block}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                >
                    <div className={styles.header}>
                        <div className={styles.title}>Filter</div>
                        <button onClick={() => dispatch(resetFilters())} className={styles.reset}>
                            <X size={20} /><span>Reset all</span>
                        </button>
                    </div>
                    <div className={styles.filters}>
                        {brands.length > 0 && (
                            <motion.div
                                className={styles.filter}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.filter__title}>Brand:</div>
                                <div className={styles.filter__positions}>
                                    {brands.map((brand, index) => (
                                        <div key={index} className={styles.filter__position}>
                                            <X onClick={() => dispatch(setDraftBrands(brand))} size={18} />
                                            <span>{brand}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                        {size.length > 0 && (
                            <motion.div
                                className={styles.filter}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.filter__title}>Size:</div>
                                <div className={styles.filter__positions}>
                                    <div className={styles.filter__position}>
                                        <X onClick={() => dispatch(setDraftSize(''))} size={18} />
                                        <span>{size}</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        {dressLengths.length > 0 && (
                            <motion.div
                                className={styles.filter}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.filter__title}>Dress length:</div>
                                <div className={styles.filter__positions}>
                                    {dressLengths.map((dressLength, index) => (
                                        <div key={index} className={styles.filter__position}>
                                            <X onClick={() => dispatch(setDraftDressLengths(dressLength))} size={18} />
                                            <span>{dressLength}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                        {color.colorName.length > 0 && (
                            <motion.div
                                className={styles.filter}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.filter__title}>Color:</div>
                                <div className={styles.filter__positions}>
                                    <div className={styles.filter__position}>
                                        <X onClick={() => dispatch(setDraftColor({ colorCode: '', colorName: '' }))} size={18} />
                                        <div className={styles.filter__color}>
                                            <span style={{ backgroundColor: color.colorCode }}></span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AppliedFilters;