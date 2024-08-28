import React from 'react';

import styles from './LanguageList.module.css';

import { LanguageOption } from '../language-option/LanguageOption';
import { languages } from '../../../../data/countryData';

export const LanguageList: React.FC = () => {
  return (
    <ul className={styles.languageListContainer}>
      {languages.map((language) => (
        <li key={language.name} className={styles.languageListItem}>
          <LanguageOption language={language} />
        </li>
      ))}
    </ul>
  );
};
