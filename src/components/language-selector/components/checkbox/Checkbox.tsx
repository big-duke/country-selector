import React, { FC } from 'react';
import styles from './Checkbox.module.css';

interface CustomCheckboxProps {
  label?: string;
  checked?  : boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<CustomCheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        className={styles.checkboxInput}
        checked={checked}
        onChange={onChange}
      />
      <div className={styles.checkbox}></div>
      <span className={styles.checkboxLabel}>{label}</span>
    </label>
  );
};


