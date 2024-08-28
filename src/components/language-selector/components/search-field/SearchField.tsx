// SearchField.tsx
import React, { useState } from 'react';
import styles from './SearchField.module.css';
import { ReactComponent as SearchIcon } from '../../../../assets/icons/search.svg'; // Иконка лупы
import { ReactComponent as ClearIcon } from '../../../../assets/icons/clear.svg'; // Иконка крестика

const SearchField: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleClear = () => {
    setQuery('');
  };

  return (
    <div className={styles.searchFieldContainer}>
      <SearchIcon className={styles.searchIcon} />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Поиск"
        className={styles.searchInput}
      />
      {query && (
        <ClearIcon onClick={handleClear} className={styles.clearIcon} />
      )}
    </div>
  );
};

export default SearchField;
