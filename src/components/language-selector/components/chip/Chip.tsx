// src/components/Chip.tsx

import React from 'react';
import styles from './Chip.module.css'; // Импортируем стили для Chip
import { ReactComponent as CloseIcon } from '../../../../assets/icons/close.svg'; // Импортируем иконку закрытия

type ChipProps = {
  language: string;
  onRemove: (language: string) => void;
}

export  const Chip: React.FC<ChipProps> = ({ language, onRemove }) => {
  return (
    <div className={styles.chip}>
      <span className={styles.chipText}>{language}</span>
      <button
        className={styles.chipRemoveButton}
        onClick={() => onRemove(language)}
      >
        <CloseIcon className={styles.closeIcon} />
      </button>
    </div>
  );
};

 
