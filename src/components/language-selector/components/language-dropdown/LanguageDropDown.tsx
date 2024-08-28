import React from 'react';
 
import styles from './LanguageDropDown.module.css';
import { LanguageList } from '../language-list/LanguageList';
import SearchField from '../search-field/SearchField';
import { useLanguageContext } from '../../LanguageContext';

export const LanguageDropDown: React.FC = () => {
  const { isDropdownOpen } = useLanguageContext();

  return (
    <div
      className={`${styles.languageDropDownContainer} ${
        isDropdownOpen ? styles.open : ''
      }`}
    >
      <SearchField />
      <LanguageList />
    </div>
  );
};
