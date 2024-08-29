// SearchField.tsx
import React, { useState } from 'react';
import styles from './SearchField.module.css';
import { ReactComponent as SearchIcon } from '../../../../assets/icons/search.svg'; // Иконка лупы
import { ReactComponent as ClearIcon } from '../../../../assets/icons/clear.svg'; // Иконка крестика
import { useLanguageContext } from '../../LanguageContext';

const SearchField: React.FC = () => {
  const {term, setTerm} = useLanguageContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const handleClear = () => {
    setTerm('');
  };

  return (
    <div className={styles.searchFieldContainer}>
      <SearchIcon className={styles.searchIcon} />
      <input
        type="text"
        value={term}
        onChange={handleChange}
        placeholder="Поиск"
        className={styles.searchInput}
      />
      {term && <ClearIcon onClick={handleClear} className={styles.clearIcon} />}
    </div>
  );
};

export default SearchField;
