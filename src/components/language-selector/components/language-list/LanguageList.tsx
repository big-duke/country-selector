import React, { useContext } from 'react';

import styles from './LanguageList.module.css';

import { LanguageOption } from '../language-option/LanguageOption';
import { useLanguageContext } from '../../LanguageContext';

export const LanguageList: React.FC = () => {
  const { filteredLanguages } = useLanguageContext();
  return (
    <ul className={styles.languageListContainer}>
      {filteredLanguages.map((language) => (
        <li key={language.name} className={styles.languageListItem}>
          <LanguageOption language={language} />
        </li>
      ))}
    </ul>
  );
};
