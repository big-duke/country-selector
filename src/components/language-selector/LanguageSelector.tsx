import React from 'react';
import styles from './LanguageSelector.module.css'
import LanguageInput from './components/language-input/LanguageInput';
import { LanguageDropDown } from './components/language-dropdown/LanguageDropDown';
import { LanguageProvider } from './LanguageContext';
export const LanguageSelector = () => {
    return (
      <LanguageProvider>
        <div className={styles.сontainer}>
          <LanguageInput />
          <LanguageDropDown />
        </div>
      </LanguageProvider>
    );
};

 