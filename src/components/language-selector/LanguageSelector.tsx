import React from 'react';
import styles from './LanguageSelector.module.css'
import LanguageInput from './components/language-input/LanguageInput';
import { LanguageDropDown } from './components/language-dropdown/LanguageDropDown';
import { LanguageProvider, useLanguageContext } from './LanguageContext';
type LanguageSelectorProps = {
  showCountryIcons?:boolean;
  multiselect?: boolean;
  hasSearch?: boolean;
};
export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  showCountryIcons,
  multiselect,
  hasSearch
}) => {
  return (
    <LanguageProvider
      showCountryIcons={showCountryIcons}
      multiselect={multiselect}
      hasSearch={hasSearch}
    >
      <div className={styles.сontainer}>
        <LanguageInput />
        <LanguageDropDown />
      </div>
    </LanguageProvider>
  );
};

