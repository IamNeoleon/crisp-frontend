import React from 'react';
import { Check } from 'lucide-react';
import styles from "./Checkbox.module.scss";

interface ICheckboxProps {
    label: string;
    checked: boolean;
    onChange: () => void;
}

const Checkbox: React.FC<ICheckboxProps> = ({ label, checked, onChange }) => {
    return (
        <>
            <label className={styles.checkbox}>
                <input type="checkbox" checked={checked} onChange={onChange} />
                <span className={styles.checkmark}>
                    <Check size={15} stroke='#fff' strokeWidth={3} />
                </span>
                {label}
            </label>
        </>
    );
};

export default Checkbox;