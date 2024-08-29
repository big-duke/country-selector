import React from 'react';
import styles from './LanguageOption.module.css';
import { Checkbox } from '../checkbox/Checkbox';
import { Language } from '../../../../types/types';
import { useLanguageContext } from '../../LanguageContext';
type LanguageOptionProps = {
  language: Language;
};
export const LanguageOption: React.FC<LanguageOptionProps> = ({ language }) => {
  const { selectedLanguages, toggleLanguage, showCountryIcons, multiselect } =
    useLanguageContext();
  const isLanguageSelected = selectedLanguages.some(
    (el) => el.name === language.name
  );
  const handleToggle = () => toggleLanguage(language);
  return (
    <div className={styles.languageOptionContainer} onClick={handleToggle}>
      {showCountryIcons && (
        <div className={styles.flagWrapper}>
          <language.flag />
        </div>
      )}
      <span className={styles.languageName}>{language.name}</span>
      {multiselect && (
        <div>
          <Checkbox checked={isLanguageSelected} />
        </div>
      )}
    </div>
  );
};
